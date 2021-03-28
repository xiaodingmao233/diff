import h from './mysnabbdom/h.js'

var myVnode1 = h('ul', {}, [
  h('li', {}, '哈哈'),
  h('li', {}, [
    h('li', {}, '哈哈'),
    h('li', {}, '嘻嘻')
  ]),
  h('li', {}, h('span', {}, '文字'))
])
console.log(myVnode1)