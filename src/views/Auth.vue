<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>

    <div :class="['form-control', {invalid: eError}]">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="eBlur">
      <small v-if="eError">{{eError}}</small>
    </div>

    <div :class="['form-control', {invalid: pError}]">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
    </div>

    <button class="btn primary" type="sumbit" :disabled="isSubmitting || isTooManyAttempts">Войти</button>
    <div class="text-danger" v-if="isTooManyAttempts">
      Вы слишком часто пытаетесь войти в систему.
      Попробуйте позже</div>
  </form>
</template>

<script lang="ts">
import {useLoginForm} from "@/use/login-form";
import {useRoute} from 'vue-router'
import {error} from "../../utils/error";
import {useUiStore} from "@/stores/UiStore";
const UiStore = useUiStore()

export default {
  setup(){
    const route = useRoute()
    if (route.query.message){
      UiStore.setMessage( {value: error(route.query.message),
           type: 'warning'} )
    }
    return {...useLoginForm()}
  }
}
</script>

<style lang="scss" scoped>

</style>