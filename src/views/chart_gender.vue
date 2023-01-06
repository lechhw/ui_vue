<template>
  <gender-comp :chartData="chartData"></gender-comp>
</template>

<script>
import genderComp from '@/components/genderComp.vue'
export default {
  components: { genderComp },
  name: 'ChartGender',

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
          },
        ],
      },
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
