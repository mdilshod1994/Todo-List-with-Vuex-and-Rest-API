<template>
    <div class="tabs">
        <button class="tab" @click="filter(undefined)" :class="{ active: undefined === tabFilterValue }">
            Все
        </button>
        <button class="tab" @click="filter(false)" :class="{ active: false === tabFilterValue }">
            Активные
        </button>
        <button class="tab" @click="filter(true)" :class="{ active: true === tabFilterValue }">
            Завершенные
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabFilterValue: undefined
        }
    },
    methods: {
        filter(e) {
            this.$emit('filter', e)
            this.tabFilterValue = e
        }
    },
}
</script>