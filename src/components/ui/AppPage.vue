<template lang="pug">
  div.breadcrumbs(v-if="back")
    router-link(to="/" class="text-white") Вернуться к списку заявок
  div.card
    h1.card-title {{title}}
      slot(name="header")
    slot
</template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  back: {
    type: Boolean,
    default: false
  }
})

document.title = `${props.title} | Клон Банка`


</script>