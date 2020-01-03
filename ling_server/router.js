/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */

// var fs = require('fs')

// Express 提供了一种更好的方式
// 专门用来包装路由的
var express = require('express')

// var template = require('art-template')

// 1. 创建一个路由容器
var router = express.Router()


var comments = [
  {
      name:'小明',
      message:'今天天气真不错！！！',
      dataTime:'2015-10-16'
  },
  {
      name:'小明',
      message:'今天天气真不错！！！',
      dataTime:'2015-10-16'
  },
  {
      name:'小明',
      message:'今天天气真不错！！！',
      dataTime:'2015-10-16'
  },
  {
      name:'小明',
      message:'今天天气真不错！！！',
      dataTime:'2015-10-16'
  },
  {
      name:'小明',
      message:'今天天气真不错！！！',
      dataTime:'2015-10-16'
  },
  {
      name:'小明',
      message:'今天天气真不错！！！',
      dataTime:'2015-10-16'
  },
  {
      name:'小明',
      message:'今天天气真不错！！！',
      dataTime:'2015-10-16'
  },
  {
      name:'小明',
      message:'今天天气真不错！！！',
      dataTime:'2015-10-16'
  }
]

router.get('/get', function (req, res) {
  res.json({
    data: comments
  })
})

// router.get('/two', function (req, res) {
//   res.render('two.html')
// })

router.post('/post', function (req, res) {
  var comment = req.body
console.log(comment)
  var time = new Date().toLocaleString()

  comment.dataTime = time
  comments.unshift(comment)

  res.json({
    code: 200,
    message: '提交完成'
  })
})


module.exports = router
