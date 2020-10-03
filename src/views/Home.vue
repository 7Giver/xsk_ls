<template>
  <div class="home" :style="{ 'min-height': pageHeight }">
    <div class="header">
      <Notice :data="noticeList" bgColor="#FAF5DC" />
      <div class="member_wrap">
        <div class="content">
          <div class="left">
            <!-- <img src="@/assets/home/member_icon.png" alt="" /> -->
            <van-image
              width="1.4rem"
              fit="contain"
              :src="require('@/assets/home/member_icon.png')"
            />
            <p>开通VIP尊享7大特权</p>
          </div>
          <div class="btn">立即开通</div>
        </div>
      </div>
      <div class="type_wrap">
        <div class="item" v-for="(item, index) in typeList" :key="index">
          <img :src="item.icon" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>

    <div class="content_wrap">
      <div class="top_wrap">
        <div class="nav_wrap">
          <div
            :class="[navIndex == index ? 'item on' : 'item']"
            v-for="(item, index) in navList"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <img class="square" src="@/assets/home/square_icon.png" alt="" />
        <van-icon name="wap-nav" color="#4C1698" size="1.5rem" />
      </div>
      <div class="list_wrap">
        <div class="item" v-for="(item, index) in dataList" :key="index">
          <div class="left">
            <p class="title">{{ item.title }}</p>
            <div class="bottom">
              <p>{{ item.add_time }}</p>
              <div>
                <van-icon name="eye-o" />
                <span>{{ item.view }}</span>
              </div>
              <p>{{ item.type }}</p>
            </div>
          </div>
          <div class="cover">
            <van-image
              radius="0.3rem"
              fit="contain"
              :src="item.cover"
              lazy-load
            >
              <template v-slot:error></template>
            </van-image>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notice from "@/components/Notice.vue";

export default {
  name: "home",
  components: {
    Notice,
  },
  data() {
    return {
      navIndex: 0,
      noticeList: [
        "恭喜王** 通过文章获客获得一个精准人脉",
        "恭喜王** 通过文章获客获得一个精准人脉",
        "恭喜王** 通过文章获客获得一个精准人脉",
        "恭喜王** 通过文章获客获得一个精准人脉",
      ],
      typeList: [
        {
          icon: require("@/assets/home/article_icon.png"),
          title: "文章获客",
        },
        {
          icon: require("@/assets/home/contacts_icon.png"),
          title: "人脉线索",
        },
        {
          icon: require("@/assets/home/sign_icon.png"),
          title: "早安打卡",
        },
        {
          icon: require("@/assets/home/wait_icon.png"),
          title: "敬请期待",
        },
      ],
      navList: ["精彩推荐", "品牌资讯", "健康养生", "生活励志"],
      dataList: [
        {
          title: "8月4号收盘点评：指数全天分 化震荡，军工、疫苗板块领...",
          add_time: "07-26",
          view: 5606,
          type: "品牌资讯",
          cover:
            "http://cdn2.yingku878.com/editor/images/20201002/1601641102385.png",
        },
        {
          title: "8月4号收盘点评：指数全天分 化震荡，军工、疫苗板块领...",
          add_time: "07-26",
          view: 5606,
          type: "品牌资讯",
          cover:
            "http://cdn2.yingku878.com/editor/images/20201002/1601641102385.png",
        },
        {
          title: "8月4号收盘点评：指数全天分 化震荡，军工、疫苗板块领...",
          add_time: "07-26",
          view: 5606,
          type: "品牌资讯",
          cover:
            "http://cdn2.yingku878.com/editor/images/20201002/1601641102385.png",
        },
        {
          title: "8月4号收盘点评：指数全天分 化震荡，军工、疫苗板块领...",
          add_time: "07-26",
          view: 5606,
          type: "品牌资讯",
          cover:
            "http://cdn2.yingku878.com/editor/images/20201002/1601641102385.png",
        },
        {
          title: "8月4号收盘点评：指数全天分 化震荡，军工、疫苗板块领...",
          add_time: "07-26",
          view: 5606,
          type: "品牌资讯",
          cover:
            "http://cdn2.yingku878.com/editor/images/20201002/1601641102385.png",
        },
        {
          title: "8月4号收盘点评：指数全天分 化震荡，军工、疫苗板块领...",
          add_time: "07-26",
          view: 5606,
          type: "品牌资讯",
          cover:
            "http://cdn2.yingku878.com/editor/images/20201002/1601641102385.png",
        },
      ],
    };
  },
  computed: {
    pageHeight() {
      let pageHeight = window.innerHeight + "px";
      return pageHeight;
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.home {
  background: #f5f5f6;
  .header {
    margin-bottom: 1rem;
    background: #fff;
    .member_wrap {
      background: url(~@/assets/home/member_bg.png) no-repeat center / 100% 100%;
      .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 1.6rem 0.9rem;
        .left {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          img {
            width: 1rem;
            height: 1rem;
          }
          p {
            color: #fff;
            margin-left: 0.4rem;
          }
        }
        .btn {
          color: #1e1d34;
          padding: 0 0.8rem;
          font-size: 0.9rem;
          font-weight: bold;
          line-height: 1.8rem;
          border-radius: 3rem;
          background: linear-gradient(80deg, #ffffe8, #f4e3b8);
        }
      }
    }
    .type_wrap {
      display: flex;
      align-items: center;
      .item {
        flex: 1;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 1rem 0;
        img {
          width: 1.8rem;
          height: 1.8rem;
        }
        p {
          color: #85898d;
          font-size: 0.85rem;
          margin-top: 0.2rem;
        }
      }
    }
  }
  .content_wrap {
    .top_wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.4rem 1rem 0.5rem;
      border-bottom: 1px solid #f5f5f5;
      background: #fff;
      .nav_wrap {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .item {
          color: #999999;
        }
      }
      .square {
        height: 1.7rem;
        width: 0.25rem;
        margin: 0 0.4rem;
      }
    }
    .list_wrap {
      .item {
        display: flex;
        padding: 1rem 5%;
        margin-bottom: 0.6rem;
        background: #fff;
        .left {
          flex: 1;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          padding-right: 1rem;
          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #858a8d;
            font-size: 0.8rem;
            div {
              display: flex;
              align-items: center;
              span {
                margin-left: 0.25rem;
              }
            }
          }
        }
        .cover {
          width: 7rem;
          .van-image {
            display: block;
          }
        }
      }
    }
  }
}
</style>
