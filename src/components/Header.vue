<template>
      <div id="nav">
    <div class="nav-group" id="left-side">
      <router-link to="/" tag="button" id="logo">TabTracker <i class="fab fa-itunes-note"></i></router-link>
      <router-link to="/show">Songs</router-link>
      <router-link to="/create">Create new Song</router-link> 
    </div>
  </div>
</template>

<style scoped>

#nav {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:#00CCFF
}

.nav-group {
  display: flex;
  align-items: center
}

#left-side {
  width: 50%;
  margin: 20px;
}


#logo {
  color: white;
  text-decoration: none;
  font-size: 25px;
}

#nav a {
  font-weight: bold;
  color: white;
  margin: 0 20px;
}

#nav a.router-link-active {
  color: #2c3e50;
}
</style>