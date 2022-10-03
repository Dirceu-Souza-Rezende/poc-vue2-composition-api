<template>
  <div id="app">
    <nav>
      <div id="nav"><router-link to="/">Home</router-link></div>
      <div id="nav"><router-link to="/todos">Todos</router-link></div>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

nav {
  display: flex;
}
</style>
