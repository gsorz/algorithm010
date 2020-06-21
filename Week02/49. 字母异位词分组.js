var groupAnagrams = function (strs) {
  // 1.长度为0，长度为1校验
  if (strs.length === 0) return [];
  if (strs.length === 1) return [strs];
  // 2.新建map
  let words = new Map();
  // 3.循环赋值map
  for (let val of strs) {
    let valSort = [...val].sort().join("");
    if (words.size > 0 && words.has(valSort)) {
      words.get(valSort).push(val);
    } else {
      words.set(valSort, [val]);
    }
  }
  // 4.输出结果
  return [...words.values()];
};
