/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (k == 0) return [[]];
  var res = [],
    could = [];

  return dfs(1, n, k, res, could);
};
function dfs(step, n, k, res, could) {
  if (could.length == k) {
    res.push(could.slice(0));

    return;
  }
  for (var i = step; i <= n; i++) {
    could.push(i);
    dfs(i + 1, n, k, res, could);
    could.pop();
  }
  return res;
}
