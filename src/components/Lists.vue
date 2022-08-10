<template>
    <table>
        <tr>
            <th>
                №
            </th>
            <th>
                Название
            </th>
            <th>
                Статус
            </th>
            <th>
                Действия
            </th>
        </tr>
        <transition-group name="list">
            <tr v-for="todo, index in todoList" :key="todo.id">
                <td>
                    {{ index + 1 }}
                </td>
                <td>
                    <input type="text" class="edit-task" v-if="index === test" v-model="todo.text">
                    <h4 :class="{ active: todo.active }" v-else>
                        {{ todo.text }}
                    </h4>
                </td>
                <td>
                    <label v-if="todo.active">
                        Завершен
                        <input type="checkbox" v-model="todo.active" @change="done(todo)">
                    </label>
                    <label v-else>
                        Активный
                        <input type="checkbox" v-model="todo.active" @change="done(todo)">
                    </label>
                </td>
                <td class="action">
                    <button title="Сохранить" v-if="index === test" @click="save(todo)">
                        <img :src="saveIcon" alt="">
                    </button>
                    <button title="Редактировать" v-else @click="edit(index)">
                        <img :src="editIcon" alt="">
                    </button>
                    <button title="Удалить" @click="remove(todo)">
                        <img :src="deleteIcon" alt="">
                    </button>
                </td>
            </tr>
        </transition-group>
    </table>
</template>

<script>
export default {
    props: ['todoList'],
    data() {
        return {
            test: null,
            deleteIcon: require('../assets/images/icons/trash.svg'),
            editIcon: require('../assets/images/icons/edit.svg'),
            saveIcon: require('../assets/images/icons/save.svg'),
        }
    },
    methods: {
        async remove(todo) {
            await this.$store.dispatch('REMOVE_TODO', todo)
            this.test = null
        },
        edit(i) {
            this.test = i
        },
        async save(todo) {
            this.test = null
            await this.$store.dispatch('EDIT_TODO', todo)
        },
        async done(todo) {
            await this.$store.dispatch('DONE_TASK', todo)
        }
    }
}
</script>
<style>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>