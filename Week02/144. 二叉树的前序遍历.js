var preorderTraversal = function (root) {
    let stack = [root]
    let arr = []
    while (stack.length > 0) {
        let node = stack.pop();
        node && arr.push(node.val); // node不为空时，向arr中推入节点值
        node && node.right && stack.push(node.right); // 模拟栈，所以先压右节点
        node && node.left && stack.push(node.left); // 后入先出，后压左节点
    }
    return arr
};