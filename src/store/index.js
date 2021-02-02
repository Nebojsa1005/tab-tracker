import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    songs: [],
    searchedSongs: [],
    recentlyViewed: [],
    spinner: false
  },
  mutations: {
    setAllSongs ( state, songs ) {
      state.songs = []
      for(let song in songs) {
        state.songs.push(songs[song])
      }
    },
    search( state, text ) {
      state.songs = state.songs.filter(el => {
        return el.title.toLowerCase().includes(text) || el.artist.toLowerCase().includes(text)
      })
    },
    setRecentSongs( state, songs ) {
      for(let song in songs) {
        state.recentlyViewed.unshift(songs[song])
      }
    },
    async addRecentlyViewed( state, song ) {
      await axios.post('https://tab-app-tracker-default-rtdb.firebaseio.com/recetlyViewed.json', song)
      const recentSongs = []
      const fetchingRecentSongs =  await axios.get('https://tab-app-tracker-default-rtdb.firebaseio.com/recetlyViewed.json')
      for(let song in fetchingRecentSongs.data) {
        recentSongs.unshift(fetchingRecentSongs.data[song])
      }
      state.recentlyViewed = recentSongs
    },
    activeSpinner( state ) {
      state.spinner = true
    },
    inactiveSpinner( state ) {
      state.spinner = false
    }
  },
  actions: {
    async getAllSongs({ commit }) {
      const songs = await axios.get('https://tab-app-tracker-default-rtdb.firebaseio.com/songs.json') 
      commit('setAllSongs', songs.data)    
    },
    async getRecentSongs ({ commit }) {
      const recentSongs = await axios.get('https://tab-app-tracker-default-rtdb.firebaseio.com/recetlyViewed.json')
      commit('setRecentSongs', recentSongs.data)
    } ,
    async addSong( {dispatch}, song ) {
      await axios.post('https://tab-app-tracker-default-rtdb.firebaseio.com/songs.json', {
        title: song.title,
        artist: song.artist,
        albumImage: song.albumImage,
        youtubeLink: song.youtubeLink,
        lyrics: song.lyrics
      })
      dispatch('getAllSongs')
    } 
  },
  getters: {
    allSongs( state ) {
      return state.songs
    },
    searchedSongs( state ) {
      return state.searchedSongs
    },
    recentlyViewed( state ) {
      return state.recentlyViewed
    },
    spinner( state ) {
      return state.spinner
    }
  }
})
