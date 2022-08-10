<template>
  <div class="home">
    <div class="home-title">
      <h1>
        TODO LIST FOR WHOLE LIFE
      </h1>
    </div>
    <hr>
    <div class="container">
      <h1 class="todo-title">
        Добавить задачу
      </h1>
      <AddTask />
    </div>
    <hr>
    <div class="container">
      <h1 class="todo-title">
        Список задач
      </h1>
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTask from '@/components/AddTask.vue';

export default {
  components: { TodoList, AddTask },
}
</script>