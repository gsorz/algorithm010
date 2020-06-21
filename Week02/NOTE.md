学习笔记
1.中序遍历 根-左-右
var preorderTraversal = function(root) {
  const res = []
    function traversal (root) {
      if (root !== null) {
        res.push(root.val) // 访问根节点的值
        traversal(root.left) // 递归遍历左子树
        traversal(root.right) // 递归遍历右子树
      }
    }
    traversal(root)
  return res
}
2.前序遍历 左-根-右
var preorderTraversal = function(root) {
  const res = []
    function traversal (root) {
      if (root !== null) {
        traversal(root.left) // 递归遍历左子树
        res.push(root.val) // 访问根节点的值
        traversal(root.right) // 递归遍历右子树
      }
    }
    traversal(root)
  return res
}
3.后序遍历 左-右-根
var preorderTraversal = function(root) {
  const res = []
    function traversal (root) {
      if (root !== null) {
        traversal(root.left) // 递归遍历左子树
        traversal(root.right) // 递归遍历右子树
        res.push(root.val) // 访问根节点的值
      }
    }
    traversal(root)
  return res
}
4.链表靠遍数
5.栈 先进后出
6.队列 先进先出