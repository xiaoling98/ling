<template>
    <div class="root">
    <h2>给我留言</h2>
    <form :v-model="loginForm">
        <div class="form-name">
            <label for="input_name">你的大名:</label>
            <input type="text" id="input_name" name="name" placeholder="姓名" v-model="loginForm.name">
        </div>
        <div class="form-comment">
            <label for="input_message">留言内容:</label>
            <input name="message" id="input_message" required minlength="5" maxlength="20" placeholder="随便说点什么吧" v-model="loginForm.message">
        </div>
        <button @click="release">发表</button>
    </form>
    <div class="inner" v-for="(item, index) in dataList" :key="index">
        <h3>{{item.name}}</h3>
        <p>{{item.message}}</p>
        <span>{{item.dataTime}}</span>
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        name: '小白',
        message: ''
      },
      dataList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const { data: res } = await this.$http.get('get')
      this.dataList = res.data
    },
    async release () {
      if (this.loginForm.name === '' || this.loginForm.message === '') return
      const { data: res } = await this.$http.post('post', this.loginForm)
      if (res.code === 200) {
        alert('发表成功')
        this.getList()
      }
    }
  }
}
</script>
<style lang="less" scoped>
    .root{
        width: 90%;
        margin: 0 auto;
        h2{
        height: 3rem;
        width: 9rem;
        margin: 3rem auto;
        font-size: 2rem;
        text-align: center;
        border-bottom: 2px solid rgb(98, 255, 0);
        }
        form{
            width: 80%;
            margin: 0 auto;
            border-bottom: 1px double #ccc;
            height: 9rem;
            .form-name{
                height: 3rem;
                input{
                    width: 10rem;
                    height: 2rem;
                    border: 1px solid orange;
                    margin-left: 1rem;
                    padding-left: 3px;
                }
            }
            .form-comment{
                height: 3rem;
                input{
                    height: 2rem;
                    width: 20rem;
                    border: 1px solid orange;
                     margin-left: 1rem;
                     padding-left: 3px;
                }
            }
            button{
                height: 2rem;
                width: 5rem;
                font-size: 0.8rem;
                font-weight: normal;
                text-align: center;
                vertical-align: middle;
                cursor: pointer;
                user-select: none;
                background-image: none;
                border: 1px solid transparent;
                border-radius: 4px;
            color: #fff;
            background-color: #5cb85c;
            &:hover{
                background-color: #439643;
            }
            }
        }
        .inner{
            width: 80%;
            margin: 0 auto;
            border-bottom: 1px double #ccc;
            height: 8rem;
            padding-top: 1rem;
            h3{
                height: 1rem;
            }
            p{
                height: 1rem;
                padding: 1.5rem;
            }
            span{
                float: right;
                padding-right: 1rem;
            }
        }
    }
@media screen and (max-width: 420px) {
    .root{
        width: 100% !important;
        .form{
             width: 100% !important;
         }
         .form-comment{
                input{
                    width: 70% !important;
                }
            }
    }
}
@media screen and (max-width: 320px) {
    .root{
         .form-comment{
                input{
                    width: 65% !important;
                }
            }
    }
}
</style>
