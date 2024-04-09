<template lang="pug">
  div.about
    app-page(title="Помощь" back)
      question-item(
        v-for="question in questions"
        :key="question.title"
        :question="question"
      )
</template>



<script setup lang="ts">
import AppPage from "@/components/ui/AppPage.vue";
import QuestionItem from "@/components/question/QuestionItem.vue";

interface question {
  title: string
  text: string
}

const questions: question[] = [
  {title: 'Что есть в данной системе?', text: 'Тут есть все чтобы смотреть заявки'},
  {title: 'Как тут работает авторизация?', text: 'Все реализовано на Firebase'}
]
</script>
