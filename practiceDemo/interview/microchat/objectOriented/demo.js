
/**
 * Created by carda on 2016/8/30.
 * @comment 1. 一个公司有很多员工，也有主管，每天员工和主管都需要签到，
 *  但是主管可以用签到机确认有多少人上班，也可以按员工ID顺序或签到顺序
 *  打印出上班的员工，还可以找出第n个上班的员工是谁。
 *  需求：
 *      请用 OO 的方法分析和实现。
 *      所有操作的事件消耗和空间消耗越低越好，其中排序算法时间复杂度不能超过O(nlogn)，
 *      极端情况下也不可以退化为n^2。
 *
 *  点：
 *      面向对象分析
 *      组合继承：借用父类构造函数 + 原型链继承
 *      排序算法
 */

var G_book = [];


function Employee(id) {
    this.id = id;
}

Employee.prototype = {
    signIn: function() {
        G_book.push(this.id);
        console.log("签到：" + this.id);
    }
};


function Leader(id) {
    Employee.call(this, id);
}

Leader.prototype = new Employee();
Leader.prototype.constructor = Leader;
// 查看多少人上班
Leader.prototype.showSignInSum = function() {
    console.log("上班的人数：" + G_book.length);
};
// 按ID顺序打印
Leader.prototype.sortSignInByID = function () {
    var signInArr = G_book.slice(0);

    quickSort(signInArr, 0, signInArr.length-1);
    console.log("按ID顺序打印已签到的员工：");
    console.log(signInArr);
};
// 按签到顺序打印
Leader.prototype.sortSignInByQueue = function () {
    console.log("按签到顺序打印已签到的员工：");
    console.log(G_book);
};
// 查看倒数第几个上班的员工
Leader.prototype.showLastN = function (last) {
    console.log("倒数第 " + last + " 个签到的员工：");
    console.log(G_book[G_book.length-last]);
};

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
    return left;
}

function swap(arr, i, j) {
    var tmp;

    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}



// ---------------------------------- test ------------------------------------------
var lily = new Employee("1001");
lily.signIn();
var lucy = new Employee("5008");
lucy.signIn();
var tom = new Employee("3004");
tom.signIn();

var john = new Leader("0002");
john.signIn();
john.showSignInSum();
john.sortSignInByID();
john.sortSignInByQueue();
john.showLastN(3);
