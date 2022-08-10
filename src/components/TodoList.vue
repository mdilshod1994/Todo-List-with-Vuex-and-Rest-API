<template>
    <div class="todo-wrap">
        <Tabs @filter="filter" />
        <Lists :todoList="todoList" />
    </div>
</template>
<script>
import Tabs from "./Tabs.vue";
import Lists from "./Lists.vue";
export default {
    components: { Tabs, Lists },
    data() {
        return {
            todoList: [],
        };
    },
    computed: {
        lists() {
            return this.$store.getters.TODO_LIST.length
        }
    },
    methods: {
        async filter(e) {
            this.todoList = this.$store.getters.TODO_LIST.filter(item => {
                switch (e) {
                    case undefined:
                        return item
                    case item.active:
                        return item
                    case item.active:
                        return item
                }
            })
        }
    },
    mounted() {
        this.filter()
    },
    watch: {
        lists(newValue) {
            if (newValue) {
                this.filter()
            }
        }
    }
}
</script>