<template>
    <div class="show-re" v-if="recentlyViewed[0]">
        <h1>Recently viewed</h1>
        <ul>
            <li v-for="(song, index) in recentlyViewed" :key="index">
                <p>{{ song.title }} - {{ song.artist }} </p>
            </li>
        </ul>
    </div>
</template>

<script>    
export default {
    computed: {
        recentlyViewed() {
            const recentSongs =  this.$store.getters.recentlyViewed
            let lastFive = []
            for(let i = 0; i < 5; i++) {
                lastFive.push(recentSongs[i])
            }
            return lastFive
       }
    }
}
</script>

<style scoped>
.show-recent {
    width: 100%;
}
h1 {
    width: 100%;
    background: #00CCFF;
    text-align: left;
    padding-left: 20px;
    margin-bottom: 10px;
}

ul {
    width: 100%;
    list-style: none;
}

li {
    height: 30px;
    padding: 5px 0;
    border-bottom: 2px solid #00CCFF 
}

</style>