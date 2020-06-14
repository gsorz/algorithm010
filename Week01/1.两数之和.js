var twoSum = function (nums, target) {
  let obj = {};
  let cha = 0;
  for (let i = 0; i < nums.length; i++) {
    cha = target - nums[i];
    if (obj[cha] != undefined) {
      return [obj[cha], i];
    }
    obj[nums[i]] = i;
  }
};
