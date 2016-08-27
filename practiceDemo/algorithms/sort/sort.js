/**
 * Created by carda on 2016/8/26.
 */

var GLOBAL_ARR = [18, 2, 5, 20, 1, 3, 34, 6];

function swap(arr, i, j) {
    var tmp;

    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function bubbleSort (arr) {
    console.log("origin Array: \n" + arr.toString());
    var len = arr.length,
        unOrdered = true,
        tmp;

    while(len-- && unOrdered) {
        unOrdered = false;

        for(var i = 0; i < len; i++){
            if(arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
                unOrdered = true;
            }
        }
        console.log(arr.toString());
    }
}


function selectionSort(arr) {
    console.log("origin Array: \n" + arr.toString());
    var len = arr.length,
        maxIndex;

    while(len--) {
        unOrdered = false;
        maxIndex = 0;

        for(var i = 0; i < len; i++) {
            if(arr[i] > arr[maxIndex]) {
                maxIndex = i;
            }
        }

        if(arr[len] < arr[maxIndex]) {
            swap(arr, len, maxIndex);
        }
        console.log(arr.toString());
    }
}

function insertionSort(arr) {
    console.log("origin Array: \n" + arr.toString());
    var len = arr.length;

    for(var i = 1; i < len; i++) {
        var j = i,
            tmp = arr[j];

        while(j && (arr[j-1] > tmp)) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = tmp;
        console.log(arr.toString());
    }
}


function shellSort(arr) {
    console.log("origin Array: \n" + arr.toString());
    var len = arr.length,
        n = Math.floor( len/2 );

    while(n >= 1) {
        for(var i = 0; i+n < len; i++) {
            for(var j = i ; j + n < len; j = j + n) {
                if(arr[j] > arr[j+n]) {
                    swap(arr, j, j+n);
                }
            }
        }
        console.log(arr.toString());

        n = Math.floor( n/2 );
    }
}


function mergeSortTop2Bottom(arr) {
    // 递归终止条件
    if(arr.length <= 1){
        return arr;
    }

    var mid = Math.floor(arr.length/2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

    console.log(left.valueOf(), right.valueOf());
    return merge(mergeSortTop2Bottom(left), mergeSortTop2Bottom(right));
}

function merge(arr1, arr2) {
    var sortedArr = [];

    console.log("sortedArr,   arr1,   arr2");
    console.log(sortedArr.valueOf(), arr1.valueOf(), arr2.valueOf());
    while(arr1 && arr1.length > 0 && arr2 && arr2.length > 0) {
        if(arr1[0] < arr2[0]) {
            sortedArr.push(arr1.shift());
        } else {
            sortedArr.push(arr2.shift());
        }
        console.log(sortedArr.valueOf(), arr1.valueOf(), arr2.valueOf());
    }

    var target = sortedArr.concat(arr1, arr2);
    console.log(target.valueOf());
    return target;
}


// a bucket sort implemented to do a quick sort
function quickSortByBucketSocket(arr, customSort){

    if(!customSort) {
        //if true, place value as "greater"
        customSort = function(a, b) {
            return a > b;
        };
    }

    if (arr.length === 0) {
        return [];
    }

    var left = [];
    var right = [];
    var pivot = arr[0];

    //go through each element in array
    for (var i = 1; i < arr.length; i++) {

        if (customSort(arr[i], pivot)) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }

    var target = quickSortByBucketSocket(left).concat(pivot, quickSortByBucketSocket(right));
    console.log(target);
    return target;
}

// Keep in mind that the partitioning is happening in place, without creating any additional arrays.
function quickSort(arr, left, right) {
    var index;

    if(arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }

    return arr;
}

function partition(arr, left, right) {
    var pivotPos = Math.floor((left+right)/2),
        pivot = arr[pivotPos];

    while(left <= right) {
        while(arr[left] < pivot) {
            left++;
        }
        while(arr[right] > pivot) {
            right--;
        }
        if(left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    console.log(arr.valueOf())

    return left;
}

window.onload = function() {
    console.log("bubbleSort ========");
    bubbleSort(GLOBAL_ARR.slice(0));

    console.log("selectionSort ==============");
    selectionSort(GLOBAL_ARR.slice(0));

    console.log("insertionSort ==============");
    insertionSort(GLOBAL_ARR.slice(0));

    console.log("shellSort ==============");
    shellSort(GLOBAL_ARR.slice(0));

    console.log("mergeSort ==============");
    mergeSortTop2Bottom(GLOBAL_ARR.slice(0));

    console.log("quickSortByBucketSocket ==============");
    quickSortByBucketSocket(GLOBAL_ARR.slice(0));

    console.log("quickSort ==============");
    quickSort(GLOBAL_ARR.slice(0), 0, GLOBAL_ARR.length-1);
};