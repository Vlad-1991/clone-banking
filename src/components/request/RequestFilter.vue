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

<script setup lang="ts">
import {ref, watch, computed} from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps(['modelValue'])
const name = ref()
const status = ref()

const reset = () => {
  name.value = ''
  status.value = null
}

watch([name, status], values => {
  emit('update:modelValue', {
    name: values[0],
    status: values[1]
  })
})

const isActive = computed(() => name.value || status.value)

</script>