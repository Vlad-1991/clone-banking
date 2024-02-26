<template>
  <div class="about">
    <app-page title="Помощь" back>
      <question-item
          v-for="question in questions"
          :key="question.title"
          :question="question"
      ></question-item>
    </app-page>
    <question-item :question="questions"></question-item>
  </div>
</template>

<script>
import AppPage from "@/components/ui/AppPage.vue";
import QuestionItem from "@/components/question/QuestionItem.vue";
export default {
  setup(){
    const questions = [
      {title: 'Что есть в данной системе?', text: 'Тут есть все чтобы смотреть заявки'},
      {title: 'Как тут работает авторизация?', text: 'Все реализовано на Firebase'}
    ]
    return {questions}
  },
  components: {QuestionItem, AppPage}
}
</script>
