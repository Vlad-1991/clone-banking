<template lang="pug">
  span.badge(:class="className") {{ text }}
</template>

<script setup lang="ts">
import {Ref, ref, watch} from "vue";


const props = defineProps({
  type: {
    type: String,
    required: true,
    validator(value: string) {
      return ['active', 'cancelled', 'done', 'pending'].includes(value)
    }
  }
})

interface valueMap {
  active: string
  cancelled: string
  done: string
  pending: string
}

const classesMap: valueMap = {
  active: 'primary',
  cancelled: 'danger',
  done: 'primary',
  pending: 'warning'
}

const textMap: valueMap = {
  active: 'Активен',
  cancelled: 'Отменен',
  done: 'Завершен',
  pending: 'Выполняется'
}

const className: Ref<string> = ref(classesMap[props.type])
const text: Ref<string> = ref(textMap[props.type])

watch(props, (value: string): void => {
  className.value = classesMap[value.type]
  text.value = textMap[value.type]
})
</script>
