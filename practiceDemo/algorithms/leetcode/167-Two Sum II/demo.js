/**
 * Created by carda on 2016/8/31.
 */

/* hash table */
function HashTable()
{
    var size = 0;
    var entry = {};

    this.add = function (key , value)
    {
        if(!this.containsKey(key))
        {
            size ++ ;
        }
        entry[key] = value;
    };

    this.getValue = function (key)
    {
        return this.containsKey(key) ? entry[key] : null;
    };


    this.containsKey = function ( key )
    {
        return (key in entry);
    };
}

/* binary search */
function binarySearch(array, target) {
    var minIndex = 0,
        maxIndex = array.length- 1,
        currentIndex,
        currentElem;

    while(minIndex < maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex)/2) || 0;
        currentElem = array[currentIndex];

        if(currentElem < target) {
            if(array[currentIndex+1] >= target) {
                return currentIndex;
            }
            minIndex = currentIndex+1;
        } else if(currentElem > target) {
            if(array[currentIndex-1] <= target) {
                return currentIndex;
            }
            maxIndex = currentIndex-1;
        } else {
            return currentIndex;
        }
    }
    return maxIndex;
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(inputArr, target) {
    var hashTable = new HashTable(),
        nums = inputArr,
        index,
        val, pos;

    // preprocess
    index = binarySearch(inputArr, target);
    nums = inputArr.slice(0, index+1);
/*    for(var j = 0; j < inputArr.length; j++) {
        if(inputArr[j] > target) {
            nums = inputArr.slice(0, j+1);
            break;
        }
    }*/

    nums.forEach(function(elem, index, array) {
        hashTable.add(elem, index);
    });

    for(var i = 0; i < nums.length; i++) {
        val = target - nums[i];
        if(hashTable.containsKey(val)) {
            pos = hashTable.getValue(val);
            if(pos != i) {
                return [i+1, pos+1];
            }
        }
    }
};


var arr = [2, 3, 4];
console.log(twoSum(arr, 6));