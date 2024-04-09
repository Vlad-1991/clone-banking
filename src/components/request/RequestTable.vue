<template lang="pug">
  h4(v-if="requests.length === 0" class="text-center")  Заявок пока нет
  table(class="table" v-else)
    thead
    tr
      th  #
      th  ФИО
      th  Телефон
      th Сумма
      th  Статус
      th  Действие
    tbody
      tr(v-for="(r, index) in requests" :key="r.id")
        td  {{ index + 1 }}
        td  {{ r.fio }}
        td  {{ r.phone }}
        td  {{ currency(r.amount) }}
        td: app-status(:type="r.status")
        td
          router-link(v-slot="{navigate}" custom :to="{name: 'Request', params: {id: r.id}}")
            button(class="btn" @click="navigate") Открыть
</template>

<script setup lang="ts">
import {currency} from "../../../utils/currency";
import AppStatus from "@/components/ui/AppStatus.vue";

interface requestType {
  amount: number,
  fio: string
  phone: string
  status: string
  id: string
}

const props = defineProps<{requests: Array<requestType>}>()

</script>