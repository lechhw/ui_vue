<template>
    <div class="header">
        <router-link to="/home"><h1>UI with Vue</h1></router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
.header {
    color: white;
    background-color: #42b883;
    padding: 1rem;

    h1 {
        font-size: 20px;
    }

    a {
        color: white;
    }
}
</style>
