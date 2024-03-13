<template>
  <div>
    <div class="sidebar" v-if="sidebar">
      <span class="sidebar-close" @click="close">&times;</span>

      <div class="sidebar-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque deserunt ea ex porro, veritatis?</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup(){
    const store = useStore()

    const sidebar = computed(() => store.state.sidebar)

    return {
      sidebar,
      close: () => store.commit('closeSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>