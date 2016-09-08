/**
 * Created by carda on 2016/9/8.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) return 0;
    var maxSum = nums[0],
        tmpSum = nums[0];

    for(var i = 1; i < nums.length; i++) {
        tmpSum = Math.max(tmpSum+nums[i], nums[i]);
        maxSum = Math.max(maxSum, tmpSum);
    }

    return maxSum;
};



// ----------------------------- test
var arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr));