<template>
    <div class="wrapper">
        <div class="row">
            <div class="header">
                <span>범위 슬라이더 : 눈금 있는 타입</span>
            </div>
            <div class="content">
                <range-slider v-model="range" id="slider_1" min="0" max="100" unit="%" division="10" style="max-width: 450px"></range-slider>
            </div>
        </div>
        <div class="hr"></div>
        <div class="row">
            <div class="header">
                <span>범위 슬라이더 : 눈금 없는 타입</span>
            </div>
            <div class="content">
                <range-slider v-model="range2" id="slider_2" type="nolabel" min="0" max="100" unit="" style="max-width: 450px"></range-slider>
            </div>
        </div>
    </div>
</template>

<script>
import RangeSlider from '@/components/rangeSlider.vue';
export default {
    components: { RangeSlider },
    data() {
        return {
            range: '',
            range2: '',
            min: '',
            max: '',
        };
    },

    mounted() {},

    methods: {},
};
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    min-width: 325px;
}
.row {
    height: calc(100% / 2);
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
        display: flex;
        width: 50%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
}
.header {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>
