<template lang="pug">
  div(class="modal-backdrop" @click="$emit('close')")
  div.modal
    h3(v-if="title") {{ title }}
    slot
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])
const props = defineProps({
  title: {
    type: String,
    required: false
  }
})
</script>
