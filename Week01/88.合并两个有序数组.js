var merge = function (nums1, m, nums2, n) {
  var index = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    nums1[index--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};
