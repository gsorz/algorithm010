/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let length = nums.length;
  let res = [],
    arr = [];
  search(res, arr, nums, length, 0);
  return res;
};
function search(res, arr, nums, k, step) {
  if (arr.length == k) {
    res.push(arr.slice());
    return;
  }
  for (let i = 0; i < k; i++) {
    if (arr.includes(nums[i])) continue;
    arr.push(nums[i]);
    search(res, arr, nums, k, step + 1);
    arr.pop();
  }
  return res;
}
