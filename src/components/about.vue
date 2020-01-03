<template>
<div class="root">
    <h2>关于我</h2>
    <div class="befor" :style="{transform: belate}"></div>
    <div class="after" :style="{transform: aflate}"></div>
    <div class="content" :style="{opacity: conShow}">
        <div class="info">
            <div class="fa">
                <div class="img"><img src="../assets/年龄.png" alt=""></div>
                <div class="text">21岁</div>
            </div>
            <div class="fa">
                <div class="img"><img src="../assets/学历.png" alt=""></div>
                <div class="text">大专</div>
            </div>
            <div class="fa">
                <div class="img"><img src="../assets/坐标.png" alt=""></div>
                <div class="text">广州</div>
            </div>
            <div class="fa">
                <div class="img"><img src="../assets/行业.png" alt=""></div>
                <div class="text">前端开发</div>
            </div>
        </div>
        <p>您好，我叫凌文财，21岁，来自广东河源，现居广州，在广东文理职业学院就读于计算机网络专业，2020年届毕业生，在校学习期间，偶然接触到前端开发，从此沉迷其中无法自拔。  我是一个对程序充满热情，对新的技术感兴趣，有着较强的自学能力，对问题有独立分析解决的能力的人！</p>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      belate: '',
      aflate: '',
      conShow: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.roller, true)
  },
  methods: {
    roller () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      Math.round(scrollTop) > clientHeight / 2 ? this.go() : this.ready()
    },
    go () {
      new Promise((resolve) => {
        this.top = '3rem'
        setTimeout(() => {
          this.belate = 'translateY(0rem)'
          this.aflate = 'translateY(24rem)'
          resolve()
        }, 1000)
      })
        .then(() => {
          setTimeout(() => {
            this.conShow = '1'
          }, 1000)
        })
    },
    ready () {
      [this.belate, this.aflate, this.conShow, this.top] = ['', '', '']
    }
  }
}
</script>

<style lang="less" scoped>
.root{
  background-image: linear-gradient(#e66465, #9198e5);
  overflow: hidden;
  h2{
    height: 3rem;
    width: 7rem;
    margin: 3rem auto;
    font-size: 2rem;
    text-align: center;
    border-bottom: 2px solid rgb(98, 255, 0);
  }
    .befor, .after{
        width: 100%;
        height: 1px;
        border-top: 1px solid #000;
        margin: 0 auto;
        transform: translateY(12rem);
        transition-delay: 0.5s;
        transition:transform 0.5s ease-in-out;
    }
    .content{
        width: 100%;
        height: 24rem;
        margin: 0 auto;
        padding: 2rem;
        line-height: 3rem;
        opacity: 0;
        color: rgb(10, 35, 72);
        transition-delay: 1s;
        transition:opacity 1s ease-in-out;
        .info{
            width: 100%;
            height: 8rem;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            .fa{
                flex: 1;
                text-align: center;
                color: #000;
                .img{
                    height: 4.2rem;
                }
            }
        }
    }
    @media screen and (max-width: 420px) {
         .content{
             line-height: 1.5rem;
             padding: 1rem;
         }
    }
}
</style>
