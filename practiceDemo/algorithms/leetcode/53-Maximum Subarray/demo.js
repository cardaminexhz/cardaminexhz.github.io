/**
 * Created by carda on 2016/9/8.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    var maxSum = nums[0],
        start = 0,
        end = 0;



    for(var i = 0; i < nums.length; i++) {
        var tmpSum = nums[i];
        if(tmpSum >= maxSum) {
            maxSum = tmpSum;
            start = i;
            end = j;
        }

        for(var j = i+1; j < nums.length; j++) {
            tmpSum += nums[j];
            if(tmpSum >= maxSum) {
                maxSum = tmpSum;
                start = i;
                end = j;
            }
        }
    }

    return maxSum;
};


// ----------------------------- test
var arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr));