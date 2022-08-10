<template>
    <div class="add-task">
        <form ref="taskCreate" @submit.prevent="createTask" class="form">
            <div class="input-container">
                <input type="text" id="username" required @blur="blurMethod" v-model="task" class="get-in-touch__input"
                    autocomplete="off">
                <label for="username" class="get-in-touch__label">Записать задачу</label>
            </div>
            <button type="submit">
                Добавить
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            task: ''
        }
    },
    methods: {
        blurMethod() {
            let inputValue = document.getElementById('username')
            if (this.task !== '') {
                inputValue.nextElementSibling.classList.add('filled')
            } else {
                inputValue.nextElementSibling.classList.remove('filled')
            }
        },
        async createTask() {
            if (this.task !== '') {
                await this.$store.dispatch('CREATE_TASK', this.task)
                this.task = ''
                this.blurMethod()
            } else {
                return
            }
        }
    },
}
</script>