<template>
  <nav class="navbar">
    <h3>Online Bank</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Заявки</router-link>
      </li>
      <li>
        <router-link to="/help">Помощь</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="openSideBar">Сообщения</a>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Выход</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {useRouter} from "vue-router";
import {useUiStore} from "@/stores/UiStore";
import {useAuthStore} from "@/stores/AuthUserStore";

export default {
  setup(){
    const router = useRouter()
    const UiStore = useUiStore()
    const AuthStore = useAuthStore()

    return {
      logout: () => {
        AuthStore.logout()
        router.push('/auth')
      },
      openSideBar: () => UiStore.openSideBar()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>