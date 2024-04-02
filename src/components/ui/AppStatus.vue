<template lang="pug">
  span.badge(:class="className") {{ text }}
</template>

<script setup lang="ts">
import {ref, watch} from "vue";


  const props = defineProps({
        type: {
          type: String,
          required: true,
          validator(value){
            return ['active', 'cancelled', 'done', 'pending'].includes(value)
          }
        }
      })

    const classesMap = {
      active: 'primary',
      cancelled: 'danger',
      done: 'primary',
      pending: 'warning'
    }

    const textMap = {
      active: 'Активен',
      cancelled: 'Отменен',
      done: 'Завершен',
      pending: 'Выполняется'
    }

    watch(props, value => {
      className.value = classesMap[value.type]
      text.value = textMap[value.type]
    })

    const className = ref(classesMap[props.type])
    const text = ref(textMap[props.type])

</script>

<style lang="scss" scoped>

</style>