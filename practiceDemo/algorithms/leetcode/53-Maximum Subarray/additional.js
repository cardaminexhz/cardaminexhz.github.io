/**
 * Created by carda on 2016/9/8.
 *
 * 一道面试题：
 * 给定一个数组，由-1, 1组成，找出和为0的最长子串的长度
 */

function longestSubStr(nums) {
    if(nums.length === 0) return 0;
    var tmpSum = nums[0],
        maxLen = 0;

    for(var i = 0; i < nums.length; i++) {
        tmpSum = nums[i];

        for(var j = i+1; j < nums.length; j++) {
            tmpSum += nums[j];
            if(tmpSum == 0) {
                maxLen = Math.max(maxLen, j-i+1);
            }
        }
    }

    return maxLen;
}


// ---------------------test
var nums = [-1, 1, -1, -1, 1, 1, 1];
console.log(longestSubStr(nums));