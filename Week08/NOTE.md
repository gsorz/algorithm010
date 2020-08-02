学习笔记

#JavaScript 位运算符

|  运算符   | 名称  |描述|
|  :----  | :----  |:----|
| &  | 	AND |如果两位都是 1 则设置每位为 1 |
| &#124;  | OR |	如果两位之一为 1 则设置每位为 1 |
| ^  | 	XOR |如果两位只有一位为 1 则设置每位为 1 |
| ~  | NOT |反转所有位 |
| <<  | 零填充左位移 |通过从右推入零向左位移，并使最左边的位脱落。 |
| >>  | 有符号右位移 |通过从左推入最左位的拷贝来向右位移，并使最右边的位脱落。 |
| >>>	  | 零填充右位移 |通过从左推入零来向右位移，并使最右边的位脱落。 |

#快速排序算法
```js
var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};
```