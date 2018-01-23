/**
 * Created by guan on 2018/1/22.
 */
/*
 包含ajax请求的代码的模块
 */
import axios from 'axios'

export const RESULT_OK = 0

export function reqSeller() { // 返回是promise对象
  return axios.get('/api/goods')
}



