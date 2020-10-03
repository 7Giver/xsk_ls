<template>
  <div id="notice" :style="{ background: bgColor }">
    <div class="content">
      <img class="icon" :src="notice_icon" alt="" />
      <van-swipe
        :autoplay="3000"
        :show-indicators="false"
        :touchable="false"
        vertical
      >
        <van-swipe-item v-for="(item, index) in data" :key="index">
          {{ item }}
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notice",
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
    bgColor: String,
  },
  data() {
    return {
      notice_icon: require("@/assets/components/notice/notice_iocn.png"),
    };
  },
  computed: {},
  mounted() {
    // console.log(this.data);
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
#notice {
  padding: 0.8rem 10%;
  .content {
    display: flex;
    align-items: center;
    height: 1rem;
    .icon {
      width: 0.9rem;
      height: 0.9rem;
      margin-right: 0.1rem;
    }
    .van-swipe {
      flex: 1;
      height: 100%;
      .van-swipe-item {
        color: #caab7f;
        font-size: 0.9rem;
        line-height: 1.1rem;
        @include textoverflow;
      }
    }
  }
}
</style>
