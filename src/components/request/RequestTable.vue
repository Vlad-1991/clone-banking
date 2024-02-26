<template>
  <h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
  <table class="table" v-else>
    <thead>
    <tr>
      <th>#</th>
      <th>ФИО</th>
      <th>Телефон</th>
      <th>Сумма</th>
      <th>Статус</th>
      <th>Действие</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="(r, index) in requests" :key="r.id">
        <td>{{ index + 1 }}</td>
        <td>{{ r.fio }}</td>
        <td>{{ r.phone }}</td>
        <td>{{ currency(r.amount) }}</td>
        <td><app-status :type="r.status"></app-status></td>
        <td>
          <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: r.id}}">
            <button class="btn" @click="navigate">Открыть</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {currency} from "../../../utils/currency";
import AppStatus from "@/components/ui/AppStatus.vue";

export default {
  props: ['requests'],
  setup(){
    return {currency}
  },
  components: {AppStatus}
}
</script>

<style lang="scss" scoped>

</style>