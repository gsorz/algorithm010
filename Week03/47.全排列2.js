/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let n = nums.length;
  nums = nums.sort((a, b) => {
    return a - b;
  });
  let res = [];
  let tmpPath = [];
  let hash = {};
  let backtrack = (tmpPath) => {
    if (tmpPath.length == n) {
      res.push(tmpPath);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (hash[i] || (i > 0 && !hash[i - 1] && nums[i - 1] == nums[i]))
        continue;
      hash[i] = true;
      tmpPath.push(nums[i]);
      backtrack(tmpPath.slice());
      hash[i] = false;
      tmpPath.pop();
    }
  };
  backtrack(tmpPath);
  return res;
};
// var permuteUnique = function(nums) {
//  let data = [];
//  nums = nums.sort();
//  function _permute(curr, remaining) {
//      if (!remaining.length) {
//          data.push(curr);
//          return;
//      }
//      for (let i = 0; i < remaining.length; i++) {
//          if (i > 0 && remaining[i] === remaining[i - 1]) {
//              continue;
//          } else {
//              curr.push(remaining[i]);
//              _permute([...curr], [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
//              curr.pop();
//          }
//      }
//  }
//  _permute([], nums);
//  return data;
// }
