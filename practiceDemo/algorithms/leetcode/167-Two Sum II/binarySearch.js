/**
 * Created by carda on 2016/8/31.
 * @ref http://oli.me.uk/2013/06/08/searching-javascript-arrays-with-a-binary-search/
 */

/**
 * binary search
 * @param {number[]} inputArr
 * @param {number} target
 * @return pos:if target in inputArr, return its index;
 *         otherwise, a negative value: Math.abs(pos) indicates the position to insert target.
 * */
function binarySearch(inputArr, target) {
    var minIndex = 0,
        maxIndex = inputArr.length - 1,
        currentIndex,
        currentElem;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElem = inputArr[currentIndex];

        if (currentElem < target) {
            minIndex = currentIndex + 1;
        } else if (currentElem > target) {
            maxIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }

    return ~maxIndex;
}

//  --------------------------------------- test
var arr = [1, 3, 6, 8, 18, 34, 53];
var pos = binarySearch(arr, 19);
if (pos < 0) {
    arr.splice(Math.abs(pos), 0, 19);  // finding where to insert an element and then inserting it.

}
console.log(arr);