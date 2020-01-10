<!--  -->
<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../../src/assets/images/banner01.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../../src/assets/images/banner02.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../../src/assets/images/banner03.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!--end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="item in options" :key="item">
          <i class="sprite" v-bind:class="item.icon"></i>
          <div class="py-2">{{item.label}}</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>

    <!--end of icons-->
    <!-- <m-card icon="menu" title="新闻资讯">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">公告</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">活动</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div class="py-2" v-for="n in 5" :key="n">
              <span>[新闻]</span>
              <span>|</span>
              <span>抢先服新赛季更新 新版本福利等你来拿</span>
              <span>06/02</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>-->

    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(news,i) in category.newsList" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span class="time">{{news.date}}</span>
        </div>
      </template>
    </m-list-card>
    <m-card icon="menu" title="英雄列表"></m-card>
    <m-card icon="menu" title="精彩视频"></m-card>
    <m-card icon="menu" title="图文攻略"></m-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      },
      options: [
        {
          label: "爆料站",
          icon: "sprite-news"
        },
        {
          label: "故事站",
          icon: "sprite-story"
        },
        {
          label: "周边商城",
          icon: "sprite-mall"
        },
        {
          label: "体验服",
          icon: "sprite-experience"
        },
        {
          label: "新人专区",
          icon: "sprite-newcomer"
        },
        {
          label: "荣耀·传承",
          icon: "sprite-inherited"
        },
        {
          label: "模拟战资料库",
          icon: "sprite-data"
        },
        {
          label: "王者营地",
          icon: "sprite-camp"
        },
        {
          label: "公众号",
          icon: "sprite-wechat"
        },
        {
          label: "版本介绍",
          icon: "sprite-version"
        },
        {
          label: "对局环境",
          icon: "sprite-match"
        },
        {
          label: "无限王者团",
          icon: "sprite-king"
        },
        {
          label: "创意互动营",
          icon: "sprite-interactive"
        }
      ],
      newsCats: [
        {
          name: "热门",
          newsList: [
            {
              categoryName: "公告",
              title: "抢先服新赛季更新 新版本福利等你来拿",
              date: "06/01"
            },
            {
              categoryName: "公告",
              title: "抢先服新赛季更新 新版本福利等你来拿",
              date: "06/01"
            },
            {
              categoryName: "公告",
              title: "抢先服新赛季更新 新版本福利等你来拿",
              date: "06/01"
            },
            {
              categoryName: "公告",
              title: "抢先服新赛季更新 新版本福利等你来拿",
              date: "06/01"
            },
            {
              categoryName: "公告",
              title: "抢先服新赛季更新 新版本福利等你来拿",
              date: "06/01"
            }
          ]
        },
        {
          name: "新闻",
          // eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "新闻",
            title: "抢先服新赛季更新 新版本福利等你来拿",
            date: "06/01"
          }))
        },
        {
          name: "公告",
          // eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "公告",
            title: "抢先服新赛季更新 新版本福利等你来拿",
            date: "06/01"
          }))
        },
        {
          name: "活动",
          // eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "活动",
            title: "抢先服新赛季更新 新版本福利等你来拿",
            date: "06/01"
          }))
        },
        {
          name: "赛事",
          // eslint-disable-next-line no-unused-vars
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "赛事",
            title: "抢先服新赛季更新 新版本福利等你来拿",
            date: "06/01"
          }))
        }
      ]
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>

<style lang='scss'>
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: #4b67af;
    }
  }
}
.nav-icons {
  .nav-item {
    width: 25%;
    border-left: 1px solid #d4d9de;
    &:nth-child(4n + 1) {
      border-left: none;
    }
    &:last-child {
      border-right: 1px solid #d4d9de;
    }
  }
}
.time {
  position: absolute;
  right: 0;
  color: #777;
  font-size: 0.24rem;
}
</style>
