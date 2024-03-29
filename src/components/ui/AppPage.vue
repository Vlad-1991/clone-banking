<template lang="pug">
  div.breadcrumbs(v-if="back")
    router-link(to="/" class="text-white") Вернуться к списку заявок
  div.card
    h1.card-title {{title}}
      slot(name="header")
    slot
</template>

<script>


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