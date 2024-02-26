<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3 v-if="title">{{ title }}</h3>

    <slot></slot>
  </div>
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