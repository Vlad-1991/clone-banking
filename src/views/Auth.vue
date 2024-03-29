<template lang="pug">
  form(class="card" @submit.prevent="onSubmit")
    h1 Войти в систему

    div(:class="['form-control', {invalid: eError}]")
      label(for="email") Email
      input(type="email" id="email" v-model="email" @blur="eBlur")
      small(v-if="eError") {{eError}}

    div(:class="['form-control', {invalid: pError}]")
      label(for="password") Password
      input(type="password" id="password" v-model="password" @blur="pBlur")
      small(v-if="pError") {{pError}}

    button(class="btn primary" type="sumbit" :disabled="isSubmitting || isTooManyAttempts") Войти
    div(class="text-danger" v-if="isTooManyAttempts")
      | Вы слишком часто пытаетесь войти в систему.
      | Попробуйте позже
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