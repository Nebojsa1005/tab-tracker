<template>
    <div class="show-id" v-if="song">
        <h1 class="content-title">{{ song.title }}<span class="artist">- {{ song.artist }}</span></h1>
        <div class="container">
            <div class="youtube-content">
                <h2 class="content-title">Youtube Video</h2>
                <div class="iframe-container" v-html="song.youtubeLink"></div>
            </div>
            <div class="content">
                <img class="image" :src="song.albumImage">
                <div class="lyrics">
                    {{ song.lyrics }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         song: null
    //     }
    // },
    computed: {
        song() {
            const {id} = this.$route.params
            const wantedSong = this.$store.getters.allSongs
            this.$store.commit('addRecentlyViewed', wantedSong[id])
            return wantedSong[id]
        }
    },
    // mounted() {
    //     const {id} = this.$route.params
    //         const wantedSong = this.$store.getters.allSongs
    //         this.song = wantedSong[id]
    //         this.$store.commit('addRecentlyViewed', wantedSong[id])
    // }

}
</script>

<style scoped>
    .show-id {
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid #00CCFF;
    }

    .container {
        width: 100%;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }



    .content-title {
        margin-bottom: 10px;
        width: 100%;
        background: #00CCFF
    }

    .content {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .iframe-container {
       position: relative;
       padding-bottom: 56.25%;
       height: 0
    }

    .iframe-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    h2 {
        text-align: left;
        padding-left: 20px;
    }

    .image {
        width: 300px;
    }

    .artist {
        align-self: flex-end;
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .lyrics {
        text-align: right;
        width:40%;
    }
</style>