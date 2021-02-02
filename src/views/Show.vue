<template>
  <div class="show">
    <div class="content-left">
      <show-recently-viewed></show-recently-viewed>
        <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
    </div>
    <div class="content-right">
      <search-bar></search-bar>
      <show-all-songs></show-all-songs>
    </div>
  </div>
</template>

<script>
import ShowAllSongs from '../components/ShowAllSongs.vue'
import SearchBar from '../components/SearchBar.vue'
import ShowRecentlyViewed from '../components/ShowRecentlyViewed.vue'

export default {
  components: {
    ShowAllSongs,
    SearchBar,
    ShowRecentlyViewed
  }
}
</script>

<style scoped>

.show {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.content-left {
  width: 39%;
}

.content-right {
  width: 59%;
  height: 100%; 
  display: flex;
  flex-direction:column;
  justify-self: flex-end;
  align-self: flex-start;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(10px)
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
 filter: blur(0);;
}

</style>