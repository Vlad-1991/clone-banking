<template>
  <div v-if="message" :class="['alert', message.type]">
    <p class="alert-title" v-if="title">{{ title }}</p>
    <p>{{ message.value }}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>
</template>

<script>
import {useUiStore} from "@/stores/UiStore";
import {computed} from "vue";


export default {
  setup() {
    const UiStore = useUiStore()
    const TITLE_MAP = {
      primary: 'Успешно!',
      danger: 'Ошибка!',
      warning: 'Внимание!'
    }

    const message = computed(() => UiStore.message)
    const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)

    return {
      message,
      title,
      close: () => {UiStore.clearMessage()}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>