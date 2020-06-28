学习笔记
1.递归模板
```
  function recursion(level,param1,param2...){
    //递归终结条件
    if(level>MAX_LEVEL){
      process_result;
      return
    }
    //处理当前层逻辑
    process(level,data)
    //下探到下一层
    recursion (level+1,p1,p2...)
    //分治在这里多一个组合结果的过程
    result = 。。。。。。
  }
  不要人肉递归
  找重复子问题
  数学归纳法的思想
```
2.回溯
if(满足条件){
  return 跳出
}
function dfs(step){
  判断边界
  {相应操作}
  尝试可能
  {
    满足条件
    标记
    继续下一步dfs(step+1)
    恢复初始（回溯时间）
  }
}
