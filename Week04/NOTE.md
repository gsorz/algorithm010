# 学习笔记

## 深度优先搜索

```bash
 function def (node){
   if (node in visited){
     return;
   }
    # process currect node 
   visited.push(node);
   dfs(node.left);
   dfs(node.right);
 }
```

```bash
  visited = new Set();
  function dfs(node,visited){
    visited.add(node);
    # process currect node here
    for( let next-node of node.children){
      if(!visited.has(next-node)){
        dfs(next-node,visited)
      }
    }
  }
```

## 广度优先搜索

```bash
  function BFS(graph,start,end){
    queue = [];
    queue.push([start]);
    visited.add(start);
    while(queue.length){
      node = queue.pop();
      visited.add(node);
      process(node);
      nodes = generate_related_nodes(node);
      queue.push(nodes);
    }
    # other processing work
  }
```

## 二分查找

```bash
 left,right - 0 ,len(array)-1;
 while(left <= right){
   mid = (left + right) / 2;
   if(array[mid] == target ) {
     #find the target
     break or return result
   }else if(array[mid] <target){
     left = mid + 1;
   }else{
     right = mid + 1;
   }
 }