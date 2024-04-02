<template lang="pug">
  div(v-if="message" :class="['alert', message.type]")
    p(class="alert-title" v-if="title") {{ title }}
    p {{ message.value }}
    span.alert-close(@click="close") &times;
</template>

<script setup lang="ts">
import {useUiStore} from "@/stores/UiStore";
import {computed} from "vue";

const UiStore = useUiStore()
const TITLE_MAP = {
  primary: 'Успешно!',
  danger: 'Ошибка!',
  warning: 'Внимание!'
}

const message = computed(() => UiStore.message)
const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)

const close = () => {
  UiStore.clearMessage()
}


</script>