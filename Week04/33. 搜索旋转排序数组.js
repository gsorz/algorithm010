/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) return mid;
    // mid > start 说明是递增的，mid左边不需要，反之右边不需要
    if (nums[start] <= nums[mid]) {
      // target 在start和mid之间，说明右边界需要左移，反之右移
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // target 在mid和end之间，说明左边界需要右移动，反之左移动
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
