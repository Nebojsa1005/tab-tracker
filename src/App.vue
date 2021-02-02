<template>
  <app-header></app-header>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
import appHeader from './components/Header.vue'
export default {
  components: {
    appHeader
  },
  mounted() {
    this.$store.dispatch("getAllSongs")
    this.$store.dispatch('getRecentSongs')
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
  width: 100%;
  padding: 0 20px;
}


#right-side {
  margin-right: 20px;
}

input {
  height: 30px;
  width: 100%;
  border: none;
  outline:none;
  background: #f5f5f5;
  margin: 5px 0;
  padding: 0 10px;
  border-radius: 7px;
}
input:focus,
textarea:focus {
  border: 2px solid #00CCFF;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(30px);
  opacity: 0
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0px);
  opacity: 1;
}


</style>
