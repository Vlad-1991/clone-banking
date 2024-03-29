<template lang="pug">
  div
    div.sidebar(v-if="sidebar")
      span(class="sidebar-close" @click="close") &times;

      div.sidebar-content
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque deserunt ea ex porro, veritatis?
</template>

<script lang="ts">
import {computed} from "vue";
import {useUiStore} from "@/stores/UiStore";

export default {
  setup(){
    const UiStore = useUiStore()

    const sidebar = computed(() => UiStore.sidebar)

    return {
      sidebar,
      close: () => UiStore.closeSideBar()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>