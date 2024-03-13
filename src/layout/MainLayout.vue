<template>
  <the-navbar></the-navbar>
  <the-sidebar></the-sidebar>
  <div class="container with-nav">
    <app-message></app-message>
   <router-view></router-view>
  </div>
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