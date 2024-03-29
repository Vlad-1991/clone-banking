<template lang="pug">
  the-navbar
  the-sidebar
  div.container.with-nav
    app-message
    router-view
</template>

<script lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import AppMessage from "@/components/ui/AppMessage.vue";
import TheSidebar from "@/components/TheSidebar.vue";
export default {
components: {TheNavbar, AppMessage, TheSidebar}
}
</script>

<style lang="scss" scoped>

</style>