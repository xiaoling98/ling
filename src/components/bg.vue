<template>
<transition name="show-fade">
  <div class="view" v-if="show">
    <ul>
      <li v-for="(item, index) in transitionDelay" :key="item.id" :style="{transform: transform, transitionDelay: transitionDelay[index]}">
        <span v-for="item in imgUrl" :key='item.id' :style='{backgroundImage: "url("+item+")"}'></span>
      </li>
    </ul>
  </div>
</transition>
</template>

<script>
export default {
  name: 'bg',
  data () {
    return {
      value: [0, 1, 2, 3, 4],
      transform: 'rotateX(0deg)',
      index: 0,
      imgUrl: [require('../assets/s1.jpg'), require('../assets/s2.jpg'), require('../assets/s3.jpg'), require('../assets/s4.jpeg')],
      transitionDelay: ['0s', '0.2s', '0.6s', '1s', '1.2s'],
      show: false
    }
  },
  props: {
    speed: {
      type: Number,
      default: 3000
    }
  },
  mounted () {
    this.animation()
  },
  methods: {
    animation () {
      window.setInterval(() => {
        let value = this.value
        this.index--
        value.forEach(item => {
          this.transform = 'rotateX(' + this.index * 90 + 'deg)'
        })
      }, this.speed)
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
.view {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  opacity: 1;
}

.show-fade-enter-active, .show-fade-leave-active {
  transition: opacity 1s;
}

.show-fade-enter, .slide-fade-leave-to{
  opacity: 0;
}
ul {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  // perspective: -1000px;
  // transform: rotateY(50deg);

  li {
    width: 20%;
    height: 100%;
    position: relative;
    float: left;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    /* 设置每一个li元素的span所显示的图片的位置 */
    &:nth-of-type(1) > span {
      background-position: 0 0;
    }
    &:nth-of-type(2) > span {
      background-position: -100% 0;
    }

    &:nth-of-type(3) > span {
      background-position: -200% 0;
    }

    &:nth-of-type(4) > span {
      background-position: -300% 0;
    }

    &:nth-of-type(5) > span {
      background-position: -400% 0;
    }
  }
  span {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: center;
    //background-repeat: repeat-X;
    background-size: cover;
    &:nth-of-type(1) {
      transform: translateZ(300px);
    }

    &:nth-of-type(2) {
      transform: translateY(-300px) rotateX(90deg);
    }

    &:nth-of-type(3) {
      transform: translateZ(-300px) rotateX(180deg);
    }

    &:nth-of-type(4) {
      transform: translateY(300px) rotateX(-90deg);
    }
  }
}
</style>
