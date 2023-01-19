<template>
    <div class="ui_bubble">
        <slot name="default"></slot>
        <transition :name="getTransition" v-if="(image && !imgError) || image == undefined">
            <div v-if="active" ref="bubble" class="bubble" :class="['is-' + pos, { 'is-customColor': getCustomColor }]" :data-pos="pos" :style="getStyle" v-init>
                <span
                    class="arrow"
                    :class="{
                        'is-title-only': !content && !subcontent && !htmlType,
                        'is-content-only': !title && htmlType,
                    }"
                    :style="getArrowPosX + ';' + getCustomColor2"
                ></span>
                <div v-if="!htmlType && !image" class="wrap" :style="getCustomColor">
                    <strong v-if="title" class="title" v-html="title" :style="getCustomColor"></strong>
                    <span v-if="content" class="content" v-html="$options.filters.lengthLimit(content, contentLimit)" :style="getCustomColor"></span>
                    <span v-if="subcontent" class="subcontent" v-html="subcontent" :style="getCustomColor"></span>
                </div>
                <div v-else-if="!htmlType && image" class="wrap image" :style="getCustomColor">
                    <img v-if="image" :src="image" />
                </div>
                <div v-else class="wrap html" :style="getCustomColor">
                    <strong v-if="title" class="title" v-html="title" :style="getCustomColor"></strong>
                    <div class="htmlContent" :style="getCustomColor">
                        <slot name="html-content">내용이 없어요</slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    name: 'BubbleBox',

    data() {
        return {
            active: false,
            pos_top: -99999,
            pos_left: -99999,
            arrow_pos_x: 0,
            arrow_pos_y: 0,
            max_wid: 'auto',
            title: this.subject,
            img: null,
            imgLoading: this.image ? true : false,
            imgError: false,
        };
    },

    props: {
        pos: { type: String, default: 'LT' },
        arrowFixed: { type: Boolean, default: false },
        click: { type: Boolean, default: false },
        subject: { type: String, default: undefined },
        content: { type: String, default: undefined },
        contentLimit: { type: Number, default: null },
        subcontent: { type: String, default: undefined },
        htmlType: { type: Boolean, default: false },
        image: { type: String, default: undefined },
        customColor: { type: String, default: null },
        showFixed: { type: Boolean, default: null },
    },

    computed: {
        getTransition: function () {
            return this.pos.indexOf('T') >= 0 ? 'fade_posy_margin' : 'fade_posy_margin_reverse';
        },
        getStyle: function () {
            var top = 'top : ' + this.pos_top + 'px;';
            var left = 'left : ' + this.pos_left + 'px;';
            var wid = 'width : ' + (this.$vnode.data.staticStyle && this.$vnode.data.staticStyle.width ? this.$vnode.data.staticStyle.width : 'max-content') + ';';
            var mw = 'max-width : ' + (this.$vnode.data.staticStyle && this.$vnode.data.staticStyle['max-width'] ? this.$vnode.data.staticStyle['max-width'] : this.max_wid + 'px') + ';';
            if (this.image) mw = 'auto';
            return top + ' ' + left + ' ' + mw + ' ' + wid;
        },
        getBubbleTop: function () {
            return 'top : ' + this.pos_top + 'px;';
        },
        getBubbleLeft: function () {
            return 'left : ' + this.pos_left + 'px;';
        },
        getBubbleMaxWid: function () {
            return 'max-width : ' + this.max_wid + 'px;';
        },
        getArrowPosX: function () {
            if (this.pos.indexOf('L') >= 0) return 'left: ' + this.arrow_pos_x + 'px';
            else if (this.pos.indexOf('R') >= 0) return 'right: ' + this.arrow_pos_x + 'px';
            else return '';
        },
        getCustomColor() {
            return this.customColor ? 'background:' + this.customColor : '';
        },
        getCustomColor2() {
            return this.customColor ? '--bg-color:' + this.customColor : '';
        },
    },

    created: function () {
        // 이미지 선로드 체크
        if (this.image) {
            this.img = new Image();
            this.img.onload = this.evt_imgLoad;
            this.img.onerror = this.evt_imgError;
            this.img.src = this.image;
        }
    },
    mounted: function () {
        // console.log($(this.$slots.default[0].elm).outerWidth());
        this.arrow_pos_x = $(this.$slots.default[0].elm).outerWidth() / 2 + 6;
        if (this.arrowFixed) this.arrow_pos_x = 14;

        if (this.click) $(this.$slots.default[0].elm).click(this.evt_click);
        else if (this.showFixed) this.active = true;
        else $(this.$slots.default[0].elm).hover(this.evt_hover);
        // if (!this.subject && !this.htmlType) this.title = $(this.$slots.default[0].elm).text();

        // console.log('this.showFixed', this.showFixed);

        $(window).scroll(this.evt_scroll);
        $(window).resize(this.evt_resize);
    },

    watch: {
        active: function ($val) {
            if (this.click) {
                if ($val) {
                    $(document).click(this.evt_docClick);
                    $(this.$slots.default[0].elm).addClass('is-active');
                } else {
                    $(document).unbind('click', this.evt_docClick);
                    $(this.$slots.default[0].elm).removeClass('is-active');
                }
            }
        },
        image: function () {
            this.imgLoading = true;
            this.imgError = false;
            this.img = new Image();
            this.img.onload = this.evt_imgLoad;
            this.img.onerror = this.evt_imgError;
            this.img.src = this.image;
        },
        subject: function ($val) {
            if (!$val && !this.htmlType) this.title = $(this.$slots.default[0].elm).text();
            else this.title = $val;
        },
        showFixed: function ($val) {
            if ($val) this.active = true;
            else this.active = false;
        },
    },
    methods: {
        evt_scroll: function () {
            if (!this.showFixed) this.active = false;
            else this.set_rePos();
        },
        evt_resize: function () {
            if (!this.showFixed) this.active = false;
            else this.set_rePos();
        },
        evt_hover: function ($e) {
            if (this.showFixed != null) return false;
            if ($e.type == 'mouseenter') this.active = true;
            else this.active = false;
        },
        evt_click: function () {
            this.active = !this.active;
        },
        evt_docClick: function ($e) {
            if (!$.contains(this.$el, $e.target)) this.active = false;
        },
        set_rePos: function () {
            if (this.pos.indexOf('T') >= 0) this.pos_top = $(this.$slots.default[0].elm).offset().top - $(window).scrollTop() - 4;
            else if (this.pos.indexOf('M') >= 0) this.pos_top = $(this.$slots.default[0].elm).offset().top - $(window).scrollTop() - 4 + $(this.$slots.default[0].elm).outerHeight() / 2;
            else if (this.pos.indexOf('B') >= 0) this.pos_top = $(this.$slots.default[0].elm).offset().top - $(window).scrollTop() + $(this.$slots.default[0].elm).outerHeight() + 4;

            if (this.pos.indexOf('L') >= 0) this.pos_left = $(this.$slots.default[0].elm).offset().left - $(window).scrollLeft() - 6;
            else if (this.pos.indexOf('R') >= 0) this.pos_left = $(this.$slots.default[0].elm).offset().left + $(this.$slots.default[0].elm).outerWidth() - $(window).scrollLeft() + 6;
            else if (this.pos.indexOf('C') >= 0) this.pos_left = $(this.$slots.default[0].elm).offset().left + $(this.$slots.default[0].elm).outerWidth() / 2;

            if (this.$vnode.data.staticStyle && this.$vnode.data.staticClass == 'is-board' && !this.$vnode.data.staticStyle.width) this.max_wid = $(this.$el).parent().width();
        },
        evt_imgLoad: function () {
            this.imgLoading = true;
        },
        evt_imgError: function () {
            this.imgError = true;
        },
    },
    directives: {
        // 달력 Insereted
        init: {
            inserted: function (el, binding, vnode) {
                vnode.context.set_rePos();
            },
        },
    },
};
</script>

<style lang="scss" scoped></style>
