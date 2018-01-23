/*
 使用mockjs来模拟数据接口
 */
import Mock from 'mockjs'

let data = Mock.mock({
  'goods|50': [{
    'id|+1': 1,
    //出生年月
    'date': '@date("yyyy-MM-dd")',
    // 邮箱
    'email': '@email',
    // 汉字姓名
    'name': '@cname()',
    // 地址
    'address': '@province' + '@city' + '@county',
    // 手机号
    'phone': /^1[385][1-9]\d{8}/
  }],

  'seller|5': [{
    'id|+1': 1,
    //出生年月
    'date': '@date("yyyy-MM-dd")',
  }]
})
//console.log(JSON.stringify(data, null, 4))

// 映射几个接口
Mock.mock('/api/goods', {
  code: 0,
  data: data.goods
})

Mock.mock('/api/seller', {
  code: 0,
  data: data.seller
})




//只需要让当前文件被执行一次即可

