// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

//leetCode 题80

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let leng=nums.length;
  for (var i=0;i<leng-1;i++) {
    let k=1;
    let res=nums[i];
      for (let j=i+1;j<leng;j++){
        if (nums[j]===res){
          k++;
        }
    }
    if (k!=1){
        nums.splice(i,k-2);
        i++;
      }
    leng=nums.length;
  }
  console.log(nums);
  // console.log(i);
  return leng;
  
};

// 题解
//传入的数组从第一个开始遍历，每次开始遍历的当前数字与前一个数字不同
//当前遍历的数字往后寻到与其相同的数字，记录个数，如果个数超过2，则通过splice函数进行删除
//每次经过处理相似数字后，开始遍历的索引号i需要更改，（若相似个数为大于等于2时，则i加2，否则加1）因为splice函数会改变原数组
//遍历的限制长度随着数组的变化同时发生变化