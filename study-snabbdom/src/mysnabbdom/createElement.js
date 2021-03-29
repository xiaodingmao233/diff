// 真正创建节点 将vnode创建为DOM 是孤儿节点 不进行插入
export default function (vnode) {
  // console.log('目的是把虚拟节点', vnode, '插入到', pivot, '前')
  // 创建一个DOM节点 这个节点现在还是孤儿节点
  let domNode = document.createElement(vnode.sel)
  // 有子节点还是有文本
  if (vnode.text !='' && (vnode.children == undefined || vnode.children.length == 0)) {
    // 它内部是文字
    domNode.innerText = vnode.text
    // 补充elm属性
    vnode.elm = domNode
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {

  }

  // 返回elm elm属性是一个纯DOM对象
  return vnode.elm
}