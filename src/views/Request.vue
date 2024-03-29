<template>
  <app-loader v-if="loading"></app-loader>
  <app-page title="Заявка" v-else-if="request" back>
    <p><strong>Имя владельца</strong>: {{request.fio}}</p>
    <p><strong>Телефон</strong>: {{request.phone}}</p>
    <p><strong>Сумма</strong>: {{currency(request.amount)}}</p>
    <p><strong>Статус</strong>: <app-status :type="request.status"></app-status></p>

    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <button class="btn danger" @click="remove">Удалить</button>
    <button class="btn" @click="update" v-if="hasChanges">Обновить</button>
  </app-page>
  <h3 v-else class="text-center text-white">
    Заявки с ID = {{id}} нет.
  </h3>
</template>

<script lang="ts">
import {useRoute, useRouter} from "vue-router";
import AppPage from "@/components/ui/AppPage.vue";
import {ref, onMounted, computed} from "vue";
import AppLoader from "@/components/ui/AppLoader.vue";
import AppStatus from "@/components/ui/AppStatus.vue";
import {currency} from "../../utils/currency";
import {loadById, removeById, updateRequest} from "@/services/api/requests";
import {showError} from "../../utils/showError";
import {useUiStore} from "@/stores/UiStore";

export default {
  setup(){
    const loading = ref(true)
    const route = useRoute()
    const router = useRouter()
    const UiStore = useUiStore()
    const status = ref()
    const request = ref({status: ''})

    onMounted(async () => {
      loading.value = true

      try {
        request.value = await loadById(route.params.id)
      } catch (e: any) {
        await showError(e)
      }


      status.value = request.value?.status
      loading.value = false
    })

    const hasChanges = computed(() => request.value.status !== status.value)

    const remove = async () => {
      try{
        await removeById(route.params.id)
        await UiStore.setMessage({
          value: 'Заявка удалена',
          type: 'primary'
        })
      } catch (e: any) {
        await showError(e)
      }

      router.push('/')
    }

    const update = async () => {
      const data = {...request.value, status: status.value, id: route.params.id}
      try{
        await updateRequest(data)
        await UiStore.setMessage({
          value: 'Заявка обновлена',
          type: 'primary'
        })
      }catch (e) {
        await showError(e)
      }
      request.value.status = status.value
    }

    return {loading, request, id: route.params.id, currency, remove, update, status, hasChanges}
  },
  components: {AppPage, AppLoader, AppStatus}
}
</script>

<style lang="scss" scoped>

</style>