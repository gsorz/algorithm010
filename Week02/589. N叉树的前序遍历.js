var preorder = function (root) {
  if (!root) return [];
  let res = [],
    arr = [root];
  while (arr.length) {
    var cur = arr.pop();
    res.push(cur.val);
    for (var i = cur.children.length - 1; i >= 0; i--) {
      arr.push(cur.children[i]);
    }
  }
  return res;
};
