/**
 * Created by carda on 2016/9/1.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var i, j, k,
        result = [];

    nums.sort(function (i, j) {
        return i-j;
    });

    for(i = 0; i < nums.length; i++) {

        if(i > 0 && nums[i] == nums[i-1]) {
            continue;
        }
        if(nums[i] > 0) {
            break;
        }

        j = i+1;
        k = nums.length-1;

        while(j < k) {
            if(j > i+1 && nums[j] == nums[j-1]) {
                j++;
                continue;
            }

            if(nums[j] + nums[i] > 0) {
                break;
            }

            if(nums[j] + nums[i] + nums[k] < 0) {
                j++;
            } else if (nums[j] + nums[i] + nums[k] > 0) {
                k--;
            } else {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
            }
        }
    }

    return result;
};



// ----------------test
var arr = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
console.log(threeSum(arr).valueOf());