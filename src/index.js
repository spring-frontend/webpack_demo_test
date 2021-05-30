import { minus, min } from './minus.js'
import './index.css'
import './index.less'
import './index.scss'

const add = require('./add.js')
console.log('我是index.js, 哈哈哈123456')
console.log(add(2, 3))
console.log(minus(20, 30))
console.log(minus(200, 300))
console.log(minus(2000, 3000))
console.log(minus(20000, 30000))
console.log(minus(200000, 300000))


let arr = [1,2,3,4]
let result = arr.map(v => v*2)
console.log(result)

