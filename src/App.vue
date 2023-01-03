<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/headerComp.vue'
export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<style lang="scss">
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
