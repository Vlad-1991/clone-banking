<template lang="pug">
  component(:is="layout" v-if="layout")
</template>


<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";
import AuthLayout from "@/layout/AuthLayout.vue";
import MainLayout from "@/layout/MainLayout.vue";

const route = useRoute()

let layout = computed(() => route.meta.layout)


</script>