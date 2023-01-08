<template>
  <div class="wrapper">
    <div class="row">
      <div class="gender_header">
        <h3>비교 데이터 1개일 경우</h3>
        <button class="reloadBtn" title="데이터 새로고침" @click="fetchData">
          <font-awesome-icon icon="fa-solid fa-arrows-rotate" />
        </button>
      </div>
      <gender-comp
        id="singleData"
        :chartData="chartData"
        style="height: 250px"
      ></gender-comp>
    </div>

    <div class="row" style="margin-top: 40px">
      <div class="gender_header">
        <h3>비교 데이터 2개일 경우</h3>
        <button class="reloadBtn" title="데이터 새로고침" @click="fetchData2">
          <font-awesome-icon icon="fa-solid fa-arrows-rotate" />
        </button>
      </div>
      <gender-comp
        id="multiData"
        :chartData="chartData2"
        style="height: 250px"
      ></gender-comp>
    </div>
  </div>
</template>

<script>
import genderComp from '@/components/genderComp.vue'
export default {
  components: { genderComp },
  // name: 'ChartGender',

  data() {
    return {
      chartData: {
        data: [
          {
            name: '남성',
            code: 'M',
            datas: [
              {
                name: '남성',
                code: 'M',
                value: Math.floor(Math.random() * 1234),
              },
            ],
            color: '#bfe5fc',
          },
          {
            name: '여성',
            code: 'F',
            datas: [
              {
                name: '여성',
                code: 'F',
                value: Math.floor(Math.random() * 1234),
              },
            ],
            color: '#fcbff2',
          },
        ],
      },

      chartData2: {
        data: [
          {
            name: '남성',
            code: 'M',
            color: '#00ACEC',
            datas: [
              {
                name: '미혼',
                code: 'M_1',
                value: Math.floor(Math.random() * 5678),
              },
              {
                name: '기혼',
                code: 'M_2',
                value: Math.floor(Math.random() * 5678),
              },
            ],
          },
          {
            name: '여성',
            code: 'F',
            color: '#FF5EDA',
            datas: [
              {
                name: '미혼',
                code: 'F_1',
                value: Math.floor(Math.random() * 5678),
              },
              {
                name: '기혼',
                code: 'F_1',
                value: Math.floor(Math.random() * 5678),
              },
            ],
          },
        ],
      },
    }
  },

  mounted() {
    // this.fetchData()
  },
  watch: {
    // chartData: {
    //   immediate: true,
    //   deep: true,
    //   handler() {
    //     this.$nextTick(() => {
    //       this.fetchData()
    //     })
    //   },
    // },
  },

  methods: {
    fetchData() {
      this.chartData = {
        data: [
          {
            name: '남성',
            code: 'M',
            datas: [
              {
                name: '남성',
                code: 'M',
                value: Math.floor(Math.random() * 1234),
              },
            ],
            color: '#bfe5fc',
          },
          {
            name: '여성',
            code: 'F',
            datas: [
              {
                name: '여성',
                code: 'F',
                value: Math.floor(Math.random() * 1234),
              },
            ],
            color: '#fcbff2',
          },
        ],
      }
    },

    fetchData2() {
      this.chartData2 = {
        data: [
          {
            name: '남성',
            code: 'M',
            color: '#00ACEC',
            datas: [
              {
                name: '미혼',
                code: 'M_1',
                value: Math.floor(Math.random() * 5678),
              },
              {
                name: '기혼',
                code: 'M_2',
                value: Math.floor(Math.random() * 5678),
              },
            ],
          },
          {
            name: '여성',
            code: 'F',
            color: '#FF5EDA',
            datas: [
              {
                name: '미혼',
                code: 'F_1',
                value: Math.floor(Math.random() * 5678),
              },
              {
                name: '기혼',
                code: 'F_1',
                value: Math.floor(Math.random() * 5678),
              },
            ],
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.row {
  padding: 20px;
  box-sizing: border-box;
}
.gender_header {
  display: flex;
  align-items: center;

  h3 {
    margin-right: 16px;
  }

  .reloadBtn {
    display: inline-block;
    background: none;
    border: none;
    color: #42b883;
    cursor: pointer;

    &:hover {
      color: #039654;
    }
  }
}
</style>
