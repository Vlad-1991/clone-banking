<template lang="pug">
  div(class="question" @click="isOpen = !isOpen")
    div(class="question-title") {{question.title}}
      div(class="question-body" v-if="isOpen") {{question.text}}
</template>

<script setup lang="ts">
import {ref} from "vue";

const isOpen = ref(false)

const props = defineProps({
  question: Object
})
</script>