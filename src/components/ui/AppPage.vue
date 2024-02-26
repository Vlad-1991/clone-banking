<template>
  <div class="breadcrumbs" v-if="back">
    <router-link to="/" class="text-white">Вернуться к списку заявок</router-link>
  </div>
  <div class="card">
    <h1 class="card-title">
      {{title}}
      <slot name="header"></slot>
    </h1>

    <slot></slot>
  </div>
</template>

<script>
import {boolean} from "yup";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  setup(props){
    document.title = `${props.title} | Клон Банка`
  }
}
</script>

<style lang="scss" scoped>

</style>