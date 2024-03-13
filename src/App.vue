<template>
<component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script lang="ts">
import {computed} from "vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import MainLayout from "@/layout/MainLayout.vue";
import {useRoute} from "vue-router";

export default {
    setup(){
      const route = useRoute()

     return {
        layout: computed(() => route.meta.layout)
     }
    },
    components: {MainLayout, AuthLayout}
  }
</script>