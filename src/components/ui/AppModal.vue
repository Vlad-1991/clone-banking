<template lang="pug">
  div(class="modal-backdrop" @click="$emit('close')")
  div.modal
    h3(v-if="title") {{ title }}
    slot
</template>

<script>
export default {
  emits: ['close'],
  props: {
    title: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>