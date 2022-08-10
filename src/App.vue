<template>
  <router-view />
</template>
<script>
export default {
  async mounted() {
    await this.$store.dispatch("GET_TODO_LISTS");
  },
}
</script>