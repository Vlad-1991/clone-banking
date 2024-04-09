<template lang="pug">
  app-loader(v-if="loading")
  app-page(title="Заявка" v-else-if="request" back)
    p <strong> Имя владельца:</strong> {{request.fio}}
    p <strong>Телефон</strong>: {{request.phone}}
    p <strong>Сумма</strong>: {{currency(request.amount)}}
    p <strong>Статус</strong>:
      app-status(:type="request.status")

    div.form-control
      label(for="status") Статус
      select(id="status" v-model="status")
        option(value="done") Завершен
        option(value="cancelled") Отменен
        option(value="active") Активен
        option(value="pending") Выполняется

    button(class="btn danger" @click="remove") Удалить
    button(class="btn" @click="update" v-if="hasChanges") Обновить
  h3(v-else class="text-center text-white") Заявки с ID = {{id}} нет.
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import AppPage from "@/components/ui/AppPage.vue";
import {ref, onMounted, computed, ComputedRef} from "vue";
import AppLoader from "@/components/ui/AppLoader.vue";
import AppStatus from "@/components/ui/AppStatus.vue";
import {currency} from "../../utils/currency";
import {loadById, removeById, updateRequest} from "@/services/api/requests";
import {showError} from "../../utils/showError";
import {useUiStore} from "@/stores/UiStore";


    const loading = ref(true)
    const route = useRoute()
    const router = useRouter()
    const UiStore = useUiStore()
    const status = ref()
    const request = ref({status: ''})
    const id = route.params.id

    onMounted(async (): Promise<void> => {
      loading.value = true

      try {
        request.value = await loadById(id)
      } catch (e: unknown) {
        await showError(e)
      }


      status.value = request.value?.status
      loading.value = false
    })

    const hasChanges: ComputedRef<boolean> = computed(() => request.value.status !== status.value)

    const remove = async (): Promise<void> => {
      try{
        await removeById(id)
        await UiStore.setMessage({
          value: 'Заявка удалена',
          type: 'primary'
        })
      } catch (e: unknown) {
        await showError(e)
      }

      router.push('/')
    }


    const update = async (): Promise<void> => {
      const data: Object = {...request.value, status: status.value, id: id}
      try{
        await updateRequest(data)
        await UiStore.setMessage({
          value: 'Заявка обновлена',
          type: 'primary'
        })
      }catch (e: unknown) {
        await showError(e)
      }
      request.value.status = status.value
    }

</script>