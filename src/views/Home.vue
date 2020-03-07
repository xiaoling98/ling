<template>
<div class="root">
    <header>
      <div class="logo"></div>
      <div class="text">
        <h3>性格开朗，积极向上，脸皮还有点厚，哈哈</h3>
      </div>
    </header>
    <main>
      <div class="place">
        <div class="nav" :style="{position: isFixded}">
          <div :class="{navLeft: navShow}" v-if="navShow">@前端小菜鸡</div>
          <ul class="navList">
            <li v-for="(item, index) in navlist" :key="item.id" @click="navgo(item.path, index)" :class="{ active: item.isactive }">{{item.authName}}</li>
          </ul>
        </div>
      </div>
      <router-view />
    </main>
    <footer>
      <h2>联系我</h2>
       <div class="info">
            <div class="fa">
                <div class="contact"><img src="../assets/wx.jpg" alt=""></div>
                <div class="img"><img src="../assets/微信.png" alt=""></div>
                <div class="text">微信</div>
            </div>
            <div class="fa">
              <div class="contact"><img src="../assets/qq.jpg" alt=""></div>
                <div class="img"><img src="../assets/qq.png" alt=""></div>
                <div class="text">QQ</div>
            </div>
            <div class="fa">
              <div class="contact">1617173502@qq.com</div>
                <div class="img"><img src="../assets/邮箱.png" alt=""></div>
                <div class="text">邮箱</div>
            </div>
            <div class="fa">
              <div class="contact">不知道写点啥。。</div>
                <div class="img"><img src="../assets/行业.png" alt=""></div>
                <div class="text">...</div>
            </div>
        </div>
    </footer>
    <div class="bg">
    <ul>
      <li v-for="(item, index) in bgImg" :key="index">
        <img :src='item.imgUrl' v-show="item.isShow">
      </li>
    </ul>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      navlist: [
        { authName: '关于我', path: '/about', isactive: true },
        { authName: '技能掌握', path: '/skill', isactive: false },
        { authName: '给我留言', path: '/message', isactive: false },
        { authName: '个人博客', path: '/evaluate', isactive: false }
      ],
      isFixded: '',
      bgImg: [
        { imgUrl: require('../assets/hBg01.jpg'), isShow: true },
        { imgUrl: require('../assets/hBg02.jpg'), isShow: false },
        { imgUrl: require('../assets/hBg03.jpg'), isShow: false }
      ],
      navShow: ''
    }
  },
  props: {
    speed: {
      type: Number,
      default: 3000
    }
  },
  mounted () {
    window.addEventListener('scroll', this.navFixed, true)
    this.play()
  },
  methods: {
    // 导航栏单击事件
    navgo (pathName, value) {
      // 判断是否重复点击导航栏
      if (pathName === this.$route.path) {
        return
      }
      // 路由跳转
      this.$router.push(pathName)
      // 修改颜色
      this.navlist.forEach((item, index) => {
        value === index ? item.isactive = true : item.isactive = false
      })
    },
    // 滚轮到达导航栏位置后固定
    navFixed () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      Math.round(scrollTop) >= clientHeight ? this.isFixded = 'fixed' : this.isFixded = ''
    },
    // 页面初始化操作
    play () {
      // 给当前路由导航修改颜色
      console.log(this.$route.path)
      this.navlist.forEach((item, index) => {
        item.path === this.$route.path ? item.isactive = true : item.isactive = false
      })
      // 导航栏响应式变化
      var winWidth = window.innerWidth
      winWidth <= 420 ? this.navShow = false : this.navShow = true
      // 轮播图
      let index = 0
      setInterval(() => {
        clearInterval(this)
        this.bgImg.forEach(item => {
          item.isShow = false
        })
        this.bgImg[index].isShow = true
        index >= 2 ? index = 0 : index++
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
@keyframes bgr{
  0%{
    transform: scale(1, 1);
    opacity: 1;
  }
  100%{
    transform: scale(1.04, 1.04);
    opacity: .7;
  }
}
.root{
  width: 100%;
  h2{
    height: 3rem;
    width: 7rem;
    margin: 3rem auto;
    font-size: 2rem;
    text-align: center;
    border-bottom: 2px solid rgb(98, 255, 0);
  }
  h3{
    color: rgb(59, 140, 194);
  }
  .bg{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    overflow: hidden;
    li{
      position: absolute;
      top: 0;
      width: 100%;
    }
    img{
      width: 100%;
      height: 100vh;
      animation: bgr 3s linear infinite alternate;
    }
  }
  header{
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .logo{
    width: 8rem;
    height: 8rem;
    border: 1px solid #000;
    border-radius: 50%;
    background: url('../assets/logo.jpg') no-repeat;
    background-size: cover;
    margin: 10rem auto 5rem;
  }
  .text{
    text-align: center;
  }
}
main{
  .place{
    width: 100%;
    height: 3rem;
    position: relative;
    .nav{
      z-index: 2;
      width: 100%;
      height: 3rem;
      position: absolute;
      display: flex;
      top: 0;
      left: 0;
      justify-content: space-between;
      line-height: 3rem;
      background-color: rgb(31, 31, 31);
      color: #fff;
      font-size: 12px;
      .navLeft{
        flex: 2;
        padding-left: 1rem;
      }
      .navList{
        display: flex;
        justify-content: space-around;
        flex: 3;
        text-align: center;
        .active{
          color: rgb(245, 48, 48);
        }
        li{
          flex:1;
          cursor: pointer;
          &:hover{
            color: rgb(245, 48, 48);
          }
        }
      }
  }
}
}
footer{
  width: 100%;
  background-image: linear-gradient(#9198e5, #8b42df);
  height: 20rem;
  overflow: hidden;
  h2{
    height: 3rem;
    margin: 0 auto;
  }
  .info{
      width: 100%;
      height: 17rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      .fa{
          box-sizing: border-box;
          height: 100%;
          flex: 1;
          text-align: center;
          color: #000;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          &:hover .contact{
            opacity: 1;
            transform: opacity;
          }
          .img{
            height: 4.2rem;
          }
          .contact{
            height: 10rem;
            opacity: 0;
            // transform: translate(70%, -110%);
            transition: all 0.7s;
            font-size: 12px;
            line-height: 10rem;
            &::after{
              content: '';
              display: block;
              width: 0;
              height: 0;
              border: 1rem solid;
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translate(-50%);
              border-color:rgb(206, 67, 199) transparent transparent  transparent;
            }
          }
      }
  }
}
}
</style>
