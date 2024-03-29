<template lang="pug">
  div(class="filter")
    div(class="form-control")
      input(type="text" placeholder="Начните писать имя" v-model="name")
    div(class="form-control")
      select(v-model="status")
        option(disabled selected) Выберите статус
        option(value="done") Завершен
        option(value="cancelled") Отменен
        option(value="active")  Активен
        option(value="pending") Выполняется
    button(class="btn warning" v-if="isActive" @click="reset")  Очистить
</template>

<script lang="ts">
import {ref, watch, computed} from 'vue'

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_: any, {emit}: any) {
    const name = ref()
    const status = ref()

    watch([name, status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })

    const isActive = computed(() => name.value || status.value)

    return {
      name,
      status,
      isActive,
      reset: () => {
        name.value = ''
        status.value = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>