<template>
  <div>
    <div class="ci-mask-transition"
      :class="{'ci-fade-toggle': show}"
      :style="{display: show ? 'block' : 'none'}"
      @click="show=false">
    </div>
    <div class="ci-actionsheet"
      :class="{'ci-actionsheet-toggle': show}">
      <div class="ci-actionsheet-menu">
        <div class="ci-actionsheet-cell ci-border-t"
          v-for="(key, text) in menus"
          @click="emitEvent('on-click-menu', key)"
          v-html="text">
        </div>
        <div class="ci-actionsheet-gap"
          v-if="showCancel">
        </div>
        <div class="ci-actionsheet-cell ci-actionsheet-cancel"
          @click="emitEvent('on-click-menu', 'cancel')"
          v-if="showCancel">{{cancelText}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    },
    showCancel: Boolean,
    cancelText: {
      type: String,
      default: 'cancel'
    },
    menus: {
      type: Object,
      default: {}
    }
  },
  methods: {
    emitEvent (event, menu) {
      if (event === 'on-click-menu' && !/.noop/.test(menu)) {
        this.$emit(event, menu)
        this.$emit(`${event}-${menu}`)
        this.show = false
      }
    }
  }
}
</script>

<style lang="scss">
$bgColor: #ECECEC;
$weuiCellBorderColor: #D9D9D9;
$pageDefaultBackgroundColor: #EFEFF4;

.ci-actionsheet {
  position: fixed;
  left: 0;
  bottom: 0;
  transform: translate(0, 100%);
  backface-visibility: hidden;
  z-index: 5000;
  width: 100%;
  background-color: $pageDefaultBackgroundColor;
  transition: transform .3s;
}
.ci-actionsheet-menu{
  background-color: #FFFFFF;
}
.ci-actionsheet_action {
  margin-top: 6px;
  background-color: #FFFFFF;
}
.ci-actionsheet-cell {
  position: relative;
  padding: 10px 0;
  text-align: center;
  font-size: 0.18rem;
  &:active{
    background-color: $bgColor;
  }
  &:first-child{
    &:before{
      display: none;
    }
  }
}

//actionSheet aniamtion
.ci-actionsheet-toggle{
  transform: translate(0, 0);
}

.weui_mask {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
}

.weui_mask_transparent {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.ci-mask-transition{
  display: none;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0);
  transition:background .3s;
}
.ci-fade-toggle{
  background: rgba(0,0,0,.6);
}

.ci-actionsheet-gap {
  height: 8px;
  width: 100%;
  background-color: #f7f9f9;
}
.ci-actionsheet-cancel:before {
  border-top: none;
}
</style>
