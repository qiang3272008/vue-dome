import {reqSeller,  RESULT_OK} from '../api'
import {

} from './mutation-types'

export default {

  // 获取商家信息
  getSeller({commit}) {
    // 发送ajax请求, 获取seller数据
    reqSeller().then(response => {
      const result = response.data
      if(result.code===RESULT_OK) {
        const seller = result.data
        // 提交mutaion请求
        commit(RECEIVE_SELLER, {seller})
      }
    })
  },

}
