/**
 * Created by carda on 2016/9/14.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var maxSoFar = nums[0],
        maxEndHere = nums[0],
        minEndHere = nums[0];

    for(var i = 1; i < nums.length; i++) {
        var max = maxEndHere, min = minEndHere;
        maxEndHere = Math.max(max * nums[i], nums[i], min * nums[i]);
        minEndHere = Math.min(max * nums[i], nums[i], min * nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndHere);
    }

    return maxSoFar;
};



// ----------------------- test
var arr = [-4, -3, -2];
console.log(maxProduct(arr));