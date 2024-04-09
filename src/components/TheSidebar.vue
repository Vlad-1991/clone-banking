<template lang="pug">
  div
    div.sidebar(v-if="sidebar")
      span(class="sidebar-close" @click="close") &times;

      div.sidebar-content
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque deserunt ea ex porro, veritatis?
</template>

<script setup lang="ts">
import {computed, ComputedRef} from "vue";
import {useUiStore} from "@/stores/UiStore";


const UiStore = useUiStore()

const sidebar: ComputedRef<boolean> = computed((): boolean => UiStore.sidebar)

const close = (): void => UiStore.closeSideBar()
</script>

