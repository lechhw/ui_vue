<template>
  <div>
    <div class="wrapper">
      <div class="manWrap">
        <div class="manGraph">
          <span class="info">{{ mData.per }}%</span>

          <svg
            ref="manImg"
            id="manImg"
            viewBox="0 0 124 308"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="svgId">
              <rect
                x="0"
                y="0"
                width="100%"
                :height="setManHgt + '%'"
                fill="white"
              ></rect>
            </mask>
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M62 64C79.6731 64 94 49.6731 94 32C94 14.3269 79.6731 0 62 0C44.3269 0 30 14.3269 30 32C30 49.6731 44.3269 64 62 64ZM0 96C0 84.9543 8.9543 76 20 76H104C115.046 76 124 84.9543 124 96V182C124 193.046 115.046 202 104 202H87V288C87 299.046 78.0457 308 67 308H57C45.9543 308 37 299.046 37 288V202H20C8.95431 202 0 193.046 0 182V96Z"
              fill="#bfe5fc"
            />

            <path
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M62 64C79.6731 64 94 49.6731 94 32C94 14.3269 79.6731 0 62 0C44.3269 0 30 14.3269 30 32C30 49.6731 44.3269 64 62 64ZM0 96C0 84.9543 8.9543 76 20 76H104C115.046 76 124 84.9543 124 96V182C124 193.046 115.046 202 104 202H87V288C87 299.046 78.0457 308 67 308H57C45.9543 308 37 299.046 37 288V202H20C8.95431 202 0 193.046 0 182V96Z"
              fill="#ffff"
              mask="url(#svgId)"
            />

            <!-- <path
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M62 64C79.6731 64 94 49.6731 94 32C94 14.3269 79.6731 0 62 0C44.3269 0 30 14.3269 30 32C30 49.6731 44.3269 64 62 64ZM0 96C0 84.9543 8.9543 76 20 76H104C115.046 76 124 84.9543 124 96V182C124 193.046 115.046 202 104 202H87V288C87 299.046 78.0457 308 67 308H57C45.9543 308 37 299.046 37 288V202H20C8.95431 202 0 193.046 0 182V96Z"
          fill="#ffff"
          mask="svgId"
        /> -->

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M92 32C92 48.5685 78.5685 62 62 62C45.4315 62 32 48.5685 32 32C32 15.4315 45.4315 2 62 2C78.5685 2 92 15.4315 92 32ZM94 32C94 49.6731 79.6731 64 62 64C44.3269 64 30 49.6731 30 32C30 14.3269 44.3269 0 62 0C79.6731 0 94 14.3269 94 32ZM39 202V200H37H20C10.0589 200 2 191.941 2 182V96C2 86.0589 10.0589 78 20 78H104C113.941 78 122 86.0589 122 96V182C122 191.941 113.941 200 104 200H87H85V202V288C85 297.941 76.9411 306 67 306H57C47.0589 306 39 297.941 39 288V202ZM20 202H35H37V204V288C37 299.046 45.9543 308 57 308H67C78.0457 308 87 299.046 87 288V204V202H89H104C115.046 202 124 193.046 124 182V96C124 84.9543 115.046 76 104 76H20C8.9543 76 0 84.9543 0 96V182C0 193.046 8.95431 202 20 202Z"
              fill="#bfe5fc"
            />
          </svg>

          <span class="name">남성</span>
        </div>
      </div>
      <div class="womanWrap">
        <div class="womanGraph">
          <span class="info">{{ fData.per }}%</span>
          <svg
            ref="womanImg"
            id="womanImg"
            viewBox="0 0 139 308"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="svgWoId">
              <rect
                x="0"
                y="0"
                width="100%"
                :height="setWomanHgt + '%'"
                fill="white"
              ></rect>
            </mask>
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M69 64C86.6731 64 101 49.6731 101 32C101 14.3269 86.6731 0 69 0C51.3269 0 37 14.3269 37 32C37 49.6731 51.3269 64 69 64ZM51.1009 85.1009C58.3905 70.0717 79.8014 70.0716 87.091 85.1008L136.162 186.272C142.604 199.554 132.929 215 118.167 215H94.096V288C94.096 299.046 85.1416 308 74.096 308H64.096C53.0503 308 44.096 299.046 44.096 288V215H20.0249C5.26242 215 -4.4125 199.554 2.02995 186.272L51.1009 85.1009Z"
              fill="#fcbff2"
            />

            <path
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M69 64C86.6731 64 101 49.6731 101 32C101 14.3269 86.6731 0 69 0C51.3269 0 37 14.3269 37 32C37 49.6731 51.3269 64 69 64ZM51.1009 85.1009C58.3905 70.0717 79.8014 70.0716 87.091 85.1008L136.162 186.272C142.604 199.554 132.929 215 118.167 215H94.096V288C94.096 299.046 85.1416 308 74.096 308H64.096C53.0503 308 44.096 299.046 44.096 288V215H20.0249C5.26242 215 -4.4125 199.554 2.02995 186.272L51.1009 85.1009Z"
              fill="#ffff"
              mask="url(#svgWoId)"
            />

            <!-- <path v-else xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M69 64C86.6731 64 101 49.6731 101 32C101 14.3269 86.6731 0 69 0C51.3269 0 37 14.3269 37 32C37 49.6731 51.3269 64 69 64ZM51.1009 85.1009C58.3905 70.0717 79.8014 70.0716 87.091 85.1008L136.162 186.272C142.604 199.554 132.929 215 118.167 215H94.096V288C94.096 299.046 85.1416 308 74.096 308H64.096C53.0503 308 44.096 299.046 44.096 288V215H20.0249C5.26242 215 -4.4125 199.554 2.02995 186.272L51.1009 85.1009Z" fill="#ffff"  :mask="svgWoId2"/> -->

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M99 32C99 48.5685 85.5685 62 69 62C52.4315 62 39 48.5685 39 32C39 15.4315 52.4315 2 69 2C85.5685 2 99 15.4315 99 32ZM101 32C101 49.6731 86.6731 64 69 64C51.3269 64 37 49.6731 37 32C37 14.3269 51.3269 0 69 0C86.6731 0 101 14.3269 101 32ZM46.0959 215V213H44.0959H20.0249C6.73867 213 -1.96876 199.099 3.82945 187.145L52.9004 85.9737C59.4611 72.4474 78.7308 72.4474 85.2915 85.9736L134.362 187.145C140.161 199.099 131.453 213 118.167 213H94.0959H92.0959V215V288C92.0959 297.941 84.0371 306 74.0959 306H64.0959C54.1548 306 46.0959 297.941 46.0959 288V215ZM20.0249 215H42.0959H44.0959V217V288C44.0959 299.046 53.0503 308 64.0959 308H74.0959C85.1416 308 94.0959 299.046 94.0959 288V217V215H96.0959H118.167C132.929 215 142.604 199.554 136.162 186.272L87.091 85.1008C79.8014 70.0716 58.3905 70.0717 51.1009 85.1009L2.02995 186.272C-4.41251 199.554 5.26241 215 20.0249 215Z"
              fill="#fcbff2"
            />
          </svg>

          <span class="name">여성</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartGender',

  data() {
    return {
      mData: [],
      fData: [],
      multiMan: [],
      multiWoman: [],
      multiManHgtT: 0,
      multiManHgtB: 0,
      multiWoHgtT: 0,
      multiWoHgtB: 0,
    }
  },
  props: {
    chartData: { type: Object },
  },

  mounted() {
    // this.getData()
  },

  computed: {
    setManHgt() {
      let result = ''
      result =
        this.multiMan.length > 0
          ? 100 - this.multiMan[0].per
          : 100 - this.mData.per

      return result
    },

    setWomanHgt() {
      let result = ''
      result =
        this.multiWoman.length > 0
          ? 100 - this.multiWoman[0].per
          : 100 - this.fData.per

      return result
    },
  },

  watch: {
    chartData: {
      immediate: true,
      deep: true,
      handler() {
        this.getData()
      },
    },
  },

  methods: {
    getData() {
      let _this = this
      let chartData = JSON.parse(JSON.stringify(this.chartData))
      let man = 0
      let woman = 0
      let totalData = 0
      let mColor = ''
      let fColor = ''

      chartData.data.forEach((item) => {
        if (item.code == 'M') {
          item.datas.forEach((item2) => {
            man += item2.value
          })
          if (item.color) mColor = item.color
        } else {
          item.datas.forEach((item2) => {
            woman += item2.value
            if (item2.color) fColor = item2.color
          })
        }

        if (item.datas.length > 1) {
          if (item.code == '남성') {
            item.datas.forEach((item3) => {
              _this.multiMan.push({
                name: item.name + 'x' + item3.name,
                value: item3.value,
                per: ((item3.value / man) * 100).toFixed(1),
                color: item.color ? item.color : '',
              })
            })
          } else {
            item.datas.forEach((item3) => {
              _this.multiWoman.push({
                name: item.name + 'x' + item3.name,
                value: item3.value,
                per: ((item3.value / woman) * 100).toFixed(1),
                color: item.color ? item.color : '',
              })
            })
          }
        }
      })

      totalData = man + woman
      this.mData = {
        name: '남성',
        value: man,
        per: ((man / totalData) * 100).toFixed(1),
        color: mColor,
      }

      this.fData = {
        name: '여성',
        value: woman,
        per: ((woman / totalData) * 100).toFixed(1),
        color: fColor,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 250px;
  padding-top: 60px;
}
.manWrap {
  height: 100%;
  margin-right: 20px;

  .manGraph {
    position: relative;
    height: 100%;

    .info {
      position: absolute;
      left: 50%;
      top: -30px;
      transform: translateX(-50%);
      font-size: 14px;
    }

    .name {
      position: absolute;
      left: 50%;
      bottom: -30px;
      transform: translateX(-50%);
      font-size: 14px;
    }

    #manImg {
      height: 100%;
    }
  }
}

.womanWrap {
  height: 100%;
  margin-left: 20px;

  .womanGraph {
    position: relative;
    height: 100%;

    .info {
      position: absolute;
      left: 50%;
      top: -30px;
      transform: translateX(-50%);
      font-size: 14px;
    }

    .name {
      position: absolute;
      left: 50%;
      bottom: -30px;
      transform: translateX(-50%);
      font-size: 14px;
    }

    #womanImg {
      height: 100%;
    }
  }
}
</style>
