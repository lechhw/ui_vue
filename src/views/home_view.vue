<template>
  <div>
    <div class="divider"></div>
    <ul class="ui_list">
      <router-link to="chart_gender">
        <li>
          01. Chart-Gender
          <font-awesome-icon class="icon" icon="fa-solid fa-arrow-right" />
        </li>
      </router-link>

      <router-link to="slider">
        <li>
          02. slider UI
          <font-awesome-icon class="icon" icon="fa-solid fa-arrow-right" />
        </li>
      </router-link>
    </ul>
    <div class="divider bottom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
.divider {
  width: 80%;
  max-width: 1200px;
  min-width: 350px;
  height: 4px;
  margin: 20px auto;
  margin-bottom: 0;
  border-radius: 2px;
  background-color: #42b883;

  &.bottom {
    margin-top: 0;
    margin-bottom: 20px;
  }
}
.ui_list {
  width: 80%;
  max-width: 1200px;
  min-width: 350px;
  height: 100%;
  padding: 16px;
  margin: 0 auto;

  li {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    padding: 20px 30px;
    padding-right: 50px;
    border-radius: 8px;
    transition: box-shadow 300ms ease-in-out;

    cursor: pointer;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }

  a {
    color: #000000;
  }
}
</style>
