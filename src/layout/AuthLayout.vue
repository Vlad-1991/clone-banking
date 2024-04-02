<template lang="pug">
  div.container
    app-message
    router-view
</template>

<script setup lang="ts">
import AppMessage from "@/components/ui/AppMessage.vue";
</script>