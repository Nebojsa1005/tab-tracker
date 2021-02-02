<template>
  <div class="home">
    <h1>Create a new Song</h1>
    {{ $v }}
    {{ v$ }}
    <form @submit.prevent>
      <input type="text" v-model="title" placeholder="Title">
      <input type="text" v-model="artist" placeholder="Artist">
      <input type="text" v-model="albumImage" placeholder="Album Image">
      <input type="text" v-model="youtubeLink" placeholder="Youtube embed (share/ embed/ copy)">
      <textarea v-model="lyrics" placeholder="Lyrics"></textarea>
      <div class="buttons">
        <button @click="createSong">Create</button>
        <button @click="back">Back</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from '@vuelidate/validators'
export default {
  data() {
    return {
      title: '',
      artist: '',
      albumImage: '',
      youtubeLink: '',
      lyrics: ''
    }
  },
   validators() {
    return  {
      title:  {required},
      artist: {required} 
    }
  },
  methods: {
    createSong() {
      this.$store.dispatch('addSong', {
        title: this.title,
        artist: this.artist,
        albumImage: this.albumImage,
        youtubeLink: this.youtubeLInk,
        lyrics: this.lyrics
      })
      this.$router.push('/show')
    },
    back() {
      this.$router.back()
    }
  },
  mounted() {
    console.log(this.v$)
  }
}
</script>


<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  width: 100%;
  padding-left: 20px;
  text-align: left;
  margin-top: 15px;
  background: #00CCFF
}

form {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}

input {
  height: 30px;
  width: 100%;
  border: none;
  outline:none;
  background: #f5f5f5;
  margin: 5px 0;
  border-radius: 7px;
}
input:focus,
textarea:focus {
  border: 2px solid #00CCFF;
}

form button {
  width: 130px;
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0 0 10px;
  border: 2px solid #00CCFF;
  padding: 5px 0;
  background: inherit;
  color: #00CCFF;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in
}

form button:hover {
  border: none;
  transform: scale(1.3)
}

textarea {
  width: 100%;
  height: 200px;
  outline: none;
  border-radius: 7px;
  padding-left: 10px;
}
</style>