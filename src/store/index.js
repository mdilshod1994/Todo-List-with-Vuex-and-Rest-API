import axios from 'axios'
import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid';

const baseUrl = 'https://my-json-server.typicode.com/falk20/demo/todos/'

export default createStore({
  state: {
    todoList: []
  },
  getters: {
    TODO_LIST(state) {
      return state.todoList
    }
  },
  mutations: {
    SET_TODO_LISTS(state, todoList) {
      state.todoList = todoList
    },
    // Добавление задачи
    SET_TASK(state, task) {
      state.todoList.push(task)
    },
    // Удаление задачи
    REMOVE_TASK(state, task) {
      let item = state.todoList.find(t => t.id === task.id)
      if (item) {
        state.todoList = state.todoList.filter(t => t.id !== task.id)
      }
    },
    // Изменение задачи
    EDIT_TASK(state, task) {
      console.log(task);
    }
  },
  actions: {

    // 1) Берем с базы данных все Todo List асинхронно
    async GET_TODO_LISTS(ctx) {
      const fetchList = await axios.get(baseUrl)
        .then(res => {
          return res.data
        })
        .catch(e => {
          console.log('error', e);
        })
      if (fetchList) {
        // 2) Коммитим наши результаты поиска, т.е. наш TODO LIST
        ctx.commit("SET_TODO_LISTS", fetchList)
      }
    },




    // Процесс добавление задач

    async CREATE_TASK(ctx, task) {
      const test = {
        text: task,
        active: false,
        id: uuidv4()
      }
      const createTask = await axios.post(baseUrl, test)
        .then(res => {
          return res.data
        })
        .catch(e => {
          console.log('error', e);
        })
      ctx.commit('SET_TASK', createTask)
    },




    // Процесс удаление задач

    async REMOVE_TODO(ctx, todo) {
      const deleted = await axios.delete(baseUrl + todo.id)
        .then(res => {
          return res
        })
        .catch(e => {
          console.log('error', e);
        })
      ctx.commit('REMOVE_TASK', todo)
    },





    // Процесс изменения задач

    async EDIT_TODO(ctx, todo) {
      const edit = await axios.put(baseUrl + todo.id, todo)
        .then(res => {
          return res
        })
        .catch(e => {
          console.log('error', e);
        })
    },




    // Процесс выполнение задач

    async DONE_TASK(ctx, todo) {
      const active = {
        active: todo.active
      }
      const edit = await axios.patch(baseUrl + todo.id, active)
        .then(res => {
          return res
        })
        .catch(e => {
          console.log('error', e);
        })
    }
  }
})
