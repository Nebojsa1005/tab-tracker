<template>
  <div v-if="spinner" class="spinner">
    <loading-spinner></loading-spinner>
  </div>
    <div class="show" v-else>
    <h1>List of songs <router-link class="plus" :to="{name: 'Create'}"><i class="fas fa-plus-circle"></i></router-link></h1>
    <ul v-if="songs">
      <li v-for="(song, index) in songs" :key="song.youtubeLink">
        <div class="content-left">
          <h3>{{ song.title }}</h3>
          <p class="artist"> - {{ song.artist }}</p>
          <router-link :to="{name: 'ShowId', params: {id: index}}">View Details <i class="fas fa-arrow-right"></i></router-link>
        </div>
        <div class="content-right image-container">
          <img class="image" :src="song.albumImage">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue'
export default {
  components: {
    LoadingSpinner
  },
  computed: {
    spinner() {
      return this.$store.getters.spinner
    },
    songs() {
      if(this.$store.getters.searchedSongs.length === 0) {
        return this.$store.getters.allSongs
      }
      return this.$store.getters.searchedSongs
    }
  }
    
}
</script>

<style scoped>
.spinner {
  align-self: center;
}

.show {
  margin: 20px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction:column;
  align-self: flex-end;
}

h1 {
  background: #00CCFF;
  text-align: right;
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 30px;
  height: 40px;
}

.plus {
  margin: 0 0 0 10px;
  color: #2c3e50;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0.8;
}
.plus:hover {
  opacity: 1;
  transform: scale(1.4);
}
  
ul {
  align-self: flex-end;
  list-style: none;
  width: 70%;
  height: 550px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 50px;
}

li {
  text-align: right;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 17px 0;
}

.content-left {
  padding-right: 20px;
  color: #00CCFF
}

h3 {
  margin-right: 15px;
}

.artist {
  font-size: 14px;
  margin: 0 10px 7px 0;
}

.image-container {
  width: 250px;
}

.image {
  width: 100%
}

a {
  text-decoration: none;
  margin: 10px 10px 0 0;
  color: #00CCFF;
}


.lyrcs {
  height: 300px;
}
</style>