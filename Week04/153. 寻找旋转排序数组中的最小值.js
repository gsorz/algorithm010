var findMin = function (nums) {
  var left = 0;
  var right = nums.length - 1;
  while (left < right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
