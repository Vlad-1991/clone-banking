<template lang="pug">
  nav.navbar
    h3 Online Bank

    ul.navbar-menu
      li
        router-link(to="/") Заявки
      li
        router-link(to="/help") Помощь
      li
        a(href="#" @click.prevent="openSideBar") Сообщения
      li
        a(href="#" @click.prevent="logout") Выход
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {useUiStore} from "@/stores/UiStore";
import {useAuthStore} from "@/stores/AuthUserStore";

const router = useRouter()
const UiStore = useUiStore()
const AuthStore = useAuthStore()


const logout = () => {
  AuthStore.logout()
  router.push('/auth')
}

const openSideBar = () => UiStore.openSideBar()


</script>