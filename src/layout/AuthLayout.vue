<template lang="pug">
  div.container
    app-message
    router-view
</template>

<script lang="ts">
import AppMessage from "@/components/ui/AppMessage.vue";
export default {
components: {AppMessage}
}
</script>

<style lang="scss" scoped>

</style>