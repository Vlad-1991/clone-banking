<template lang="pug">
  form(@submit.prevent="onSubmit")
    div(class="form-control" :class="{invalid: fError}")
      label(for="fio")  ФИО
      input(type="text" id="fio" placeholder="Сидоров Петр Иванович" v-model="fio" @blur="fBlur")
      small(v-if="fError")  {{fError}}

    div(class="form-control" :class="{invalid: pError}")
      label(for="phone")  Телефон
      input(type="tel" pattern="[0-9]{3}-{0,1}[0-9]{3}-{0,1}[0-9]{4}" placeholder="123-456-7890" id="phone" v-model="phone" @blur="pBlur")
      small(v-if="pError")  {{pError}}

    div(class="form-control" :class="{invalid: aError}")
      label(for="amount") Суммы
      input(type="number" placeholder="5000" id="amount" v-model.number="amount" @blur="aBlur")
      small(v-if="aError")  {{aError}}

    div(class="form-control")
      label(for="status") Статус
      select(id="status" v-model="status")
        option(value="done")  Завершен
        option(value="cancelled") Отменен
        option(value="active") Активен
        option(value="pending") Выполняется

    button(class="btn primary" :disabled="isSubmitting") Создать

</template>

<script setup lang="ts">
import {useRequestForm} from "@/use/request-form";
import {create} from "@/services/api/requests"
import {showError} from "../../../utils/showError";
import {useUiStore} from "@/stores/UiStore";
import {useRequestsStore} from "@/stores/RequestsStore";

const emit = defineEmits(['created'])


const UiStore = useUiStore()
const RequestsStore = useRequestsStore()

const submit = async (values: any) => {
  try {
    let data = await create(values)
    RequestsStore.addRequest({...values, id: data.name})

    await UiStore.setMessage({
      value: 'Заявка успешно создана',
      type: 'primary'
    })

  } catch (e: any) {
    await showError(e)
  }
  emit('created')
}

const {
  status,
  isSubmitting,
  onSubmit,
  fio,
  phone,
  amount,
  fError,
  fBlur,
  pError,
  pBlur,
  aError,
  aBlur
} = useRequestForm(submit)

</script>

<style lang="scss" scoped>

</style>