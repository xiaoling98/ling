<template>
  <div class="root"  :style="{backgroundColor: bgc}">
    <transition name="conShow">
    <div class="content" v-if="conShow">
      <div class="logo"></div>
      <div class="text">
        <h2>如果你没有特别幸运，那请你特别努力。</h2>
      </div>
      <ul>
        <li v-for="(list, index) in penData" :key="list.id" :style="{transitionDelay: transitionDelay[index], transform: move}">{{list}}</li>
      </ul>
      <div class="button" :style="{opacity: btnShow}">
        <router-link to='/home'>开始</router-link>
      </div>
    </div>
    </transition>
    <bg :speed="5000"/>
  </div>
</template>

<script>
import bg from '@/components/bg.vue'
export default {
  name: 'login',
  components: {
    bg
  },
  data () {
    return {
      bgc: '#000',
      conShow: false,
      penData: ['您好，我叫凌文财', '今年21岁', '计算机网络技术专业', '希望能够从事前端开发'],
      transitionDelay: ['0s', '0.5s', '1s', '1.5s'],
      move: '',
      btnShow: '0'
    }
  },
  mounted () {
    this.go()
  },
  methods: {
    go () {
      let step1 = new Promise((resolve) => {
        setTimeout(() => {
          this.bg = 'transparent'
          resolve()
        }, 1500)
      })

      // let step2 = new Promise((resolve) => {
      //   let oldH = this.cteHeight
      //   setTimeout(() => {
      //     this.cteHeight = oldH + 'rem'
      //     oldH += 1
      //     resolve()
      //   }, 100)
      // })

      step1.then(() => {
        this.conShow = true
        setTimeout(() => {
          this.move = 'translateY(0rem)'
          this.btnShow = '1'
        }, 200)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.root {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  position: relative;
  min-height: 100vh;
  width: 100%;
  opacity: 1;
  overflow: hidden;
}
.conShow-enter-active, .conShow-leave-active {
  transition: opacity 0.5s;
}

.conShow-enter, .slide-fade-leave-to{
  opacity: 0;
}
.content {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  max-width: 100%;
  z-index: 3;
  width: 70%;
  position: relative;
  top: 50%;
  margin-top: -10rem;
  color: rgba(255, 255, 255, 0.8);
  height: 2rem;
  .logo {
    width: 8rem;
    height: 8rem;
    border: 1px solid #000;
    position: absolute;
    top: -11rem;
    border-radius: 50%;
    background: url('../assets/logo.jpg') no-repeat;
    background-size: cover;
    opacity: .8;
    transition: transform 1s;
  }
  ul{
    margin-top:3rem;
    text-align: center;
  }
  li{
    margin-bottom: 1rem;
    transition: transform 1s;
    transform: translateY(100rem);
  }
  .button {
    width: 6rem;
    height: 2rem;
    border: 1px solid #000;
    text-align: center;
    line-height: 2rem;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;
    position: absolute;
    top: 20rem;
    background-color: rgba(255, 255, 255, 0.3);
    transition: opacity 0.8s ease-in;
    transition-delay:2.3s;
    &:hover {
      background-color: rgba(213, 209, 209, 0.5);
    }
  }
  h2 {
    font-size: 1.1rem;
    letter-spacing: 0.2rem;
    color: rgb(255, 0, 0);
  }
}
</style>
