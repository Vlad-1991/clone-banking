<template lang="pug">
  div(v-if="message" :class="['alert', message.type]")
    p(class="alert-title" v-if="title") {{ title }}
    p {{ message.value }}
    span.alert-close(@click="close") &times;
</template>

<script setup lang="ts">
import {useUiStore} from "@/stores/UiStore";
import {computed, ComputedRef} from "vue";

interface titleMap {
  primary: string
  danger: string
  warning: string
}

const UiStore = useUiStore()

const TITLE_MAP: titleMap = {
  primary: 'Успешно!',
  danger: 'Ошибка!',
  warning: 'Внимание!'
}

const message: ComputedRef<string | null> = computed(() => UiStore.message)
const title: (ComputedRef<string | null> | null) = computed(() => message.value ? TITLE_MAP[message.value.type] : null)

const close = () => {
  UiStore.clearMessage()
}

</script>