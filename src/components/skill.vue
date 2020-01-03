<template>
    <div class="root">
        <h2>技能掌握</h2>
        <div class="content">
            <p>从诞生到发展至今，前端工程师的定位一直在变化。从“切图仔”升级到“大前端”，前端的知识面非常广泛，而在前端开发的学习工作中，重中之重就是对于原生javascript的理解和把握，从而在此基础上学习新的框架</p>
        </div>
        <div class="fade">
            <ul class="list">
                <li v-for="(item, index) in anmiTime" :key="index" :style="{transitionDelay: item.time, transform: item.late}">
                    <div class="front">
                        <span>{{item.frontText}}</span>
                    </div>
                    <div class="back">
                        <span>{{item.backText}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      anmiTime: [
        { time: '0.2s', late: '', frontText: 'HTML5', backText: '掌握HTML5语法、使用技巧及HTML5常用标签' },
        { time: '0.8s', late: '', frontText: 'CSS3', backText: '熟练使用DIV+CSS布局方式及css3动画效果' },
        { time: '1.2s', late: '', frontText: 'JavaScript', backText: '熟练使用原生JS，掌握常用ES6语法' },
        { time: '1.8s', late: '', frontText: 'JQuery', backText: '实现页面的交互效果，提高用户体验' },
        { time: '0.2s', late: '', frontText: 'Webpack', backText: '了解并能够使用webpack打包项目' },
        { time: '0.8s', late: '', frontText: 'node', backText: '能够简单搭建一个web服务器' },
        { time: '1.2s', late: '', frontText: 'Vue', backText: '熟练使用vue以及vue-roter' },
        { time: '1.8s', late: '', frontText: 'Bootstrap', backText: '本站没使用不代表我不会哦' }
      ]
    }
  },
  created () {
    window.addEventListener('scroll', this.roller, true)
  },
  methods: {
    roller () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      Math.round(scrollTop) > clientHeight / 2 ? this.go() : this.ready()
    },
    go () {
      this.oldConfigure = this.anmiTime
      setTimeout(() => {
        this.anmiTime.forEach(item => {
          item.late = 'translateX(0) rotate(0)'
        })
      }, 0)
    },
    ready () {
      this.anmiTime.forEach(item => {
        item.late = 'translateX(-100rem) rotate(-360deg)'
      })
    }
  }
}

</script>

<style lang="less" scoped>
.root{
    overflow: hidden;
    background: url('../assets/skillBg.jpg') no-repeat;
    background-size: cover;
    height: 100vh;
  h2{
    height: 3rem;
    width: 9rem;
    margin: 3rem auto;
    font-size: 2rem;
    text-align: center;
    border-bottom: 2px solid rgb(98, 255, 0);
  }
  .content{
      display: block;
      width: 90%;
      height: 8rem;
      margin: 0 auto;
      text-align: center;
      color: rgb(226, 224, 224);
  }
  .fade{
      height: 24rem;
      margin: 0 auto;
      width: 100%;
      ul{
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          align-items: flex-start;
          li{
              width: 22%;
              height: 10rem;
              position: relative;
              perspective: 1000px;
              transform-style: preserve-3d;
              margin: 0 auto;
              transition: all 1.5s ease;
              transform: translateX(-100rem) rotate(-360deg);
              .back,.front{
                width: 90%;
                // border: 1px solid rgb(253, 72, 72);
                box-shadow: 0 0 3px 1px rgb(255, 0, 0);
                height: 100%;
                background-color: rgb(0, 0, 0);
                color: rgb(110, 143, 233);
                position: absolute;
                left: 0;
                top: 0;
                transition: all 1s ease;
               }
               .front{
                line-height: 10rem;
                opacity: .7;
                text-align: center;
               }
               .back{
                opacity: 0;
                transform: rotateY(180deg);
               }
               &:hover .front{
                transform: rotateY(-180deg);
                opacity: 0;
               }
               &:hover .back{
                transform: none;
                opacity: .7;
               }
          }
      }
  }
}
</style>
