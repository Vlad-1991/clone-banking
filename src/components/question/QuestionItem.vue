<template lang="pug">
  div(class="question" @click="isOpen = !isOpen")
    div(class="question-title") {{question.title}}
      div(class="question-body" v-if="isOpen") {{question.text}}
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  props: ['question'],
  setup(){
    return {
      isOpen: ref(false)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>