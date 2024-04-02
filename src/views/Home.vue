<template lang="pug">
  app-loader(v-if="loading")
  app-page(title="Список заявок" v-else)
    template(#header)
      button(class="btn primary" @click="modal = true") Создать

    request-filter(v-model="filter")
    RequestTable(:requests="requests")

    teleport(to="body")
      app-modal(v-if="modal" title="Создать заявку" @close="modal = false")
        request-modal(@created="modal = false")
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from "vue";
import AppPage from "@/components/ui/AppPage.vue";
import RequestTable from "@/components/request/RequestTable.vue";
import AppModal from "@/components/ui/AppModal.vue";
import RequestModal from "@/components/request/RequestModal.vue";
import RequestFilter from "@/components/request/RequestFilter.vue";
import {useRequestsStore} from "@/stores/RequestsStore";
import AppLoader from "@/components/ui/AppLoader.vue";
import {load} from "@/services/api/requests";
import {showError} from "../../utils/showError";
import {requestType} from "../../utils/requestType";


const RequestsStore = useRequestsStore()
const modal = ref(false)
const loading = ref(false)
const filter = ref({name: '', status: ''})

onMounted(async () => {
  loading.value = true

  try {
    let requests = await load()
    RequestsStore.setRequests(requests)
  } catch (e: any) {
    await showError(e)
  }

  loading.value = false
})

const requests = computed(() => RequestsStore.getRequests
    .filter((request: requestType) => {
      if (filter.value.name) {
        return (request.fio).toLowerCase().includes(filter.value.name.toLowerCase())
      }
      return request
    })
    .filter((request: requestType) => {
      if (filter.value.status) {
        return filter.value.status === request.status
      }
      return request
    })
)
</script>
