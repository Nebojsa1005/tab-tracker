<template>
    <div class="search-bar-content">
        <h1>Search</h1>
        <input type="text" @input="search" v-model="searchFor" placeholder="Enter a title or artist">
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchFor: ''
        }
    },
    methods: {
        async search() {
            this.$store.commit('activeSpinner')
            await this.$store.dispatch('getAllSongs')
            this.$store.commit('search', this.searchFor.toLowerCase())
            this.$store.commit('inactiveSpinner')
        }
    }
}
</script>

<style scoped>
h1 {
    background: #00CCFF;
    text-align: right;
    padding-right: 20px;
    margin-bottom: 10px;
}   

</style>