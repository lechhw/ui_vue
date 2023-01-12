<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/headerComp.vue';
export default {
    name: 'App',
    components: {
        Header,
    },
};
</script>

<style lang="scss">
body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    vertical-align: top;
}

#app {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
</style>
