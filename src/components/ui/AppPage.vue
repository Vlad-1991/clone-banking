<template lang="pug">
  div.breadcrumbs(v-if="back")
    router-link(to="/" class="text-white") Вернуться к списку заявок
  div.card
    h1.card-title {{title}}
      slot(name="header")
    slot
</template>

<script setup lang="ts">

const props = defineProps<{
  title: string
  back?: boolean
}>()

document.title = props.title + " | Клон Банка"


</script>