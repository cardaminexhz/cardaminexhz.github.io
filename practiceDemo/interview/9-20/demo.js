/**
 * 求数组的交集
 * e.g. arr1 = [1,2,3,3,4,2,3,5]; arr2 = [3,4,4,3,5,7,8];
 * T(n) = o(n); S(n) = o(n);
 * */


/* hash table */
function HashTable()
{
    var entry = {};

    this.add = function (key , value)
    {
        entry[key] = value;
    }

    this.containsKey = function ( key )
    {
        return (key in entry);
    }

    this.getKeys = function ()
    {
        var keys = [];
        for(var prop in entry)
        {
            keys.push(prop);
        }
        return keys;
    }

}

function intersect (arr1, arr2) {
    var t1 = new HashTable(),
        t2 = new HashTable(),
        arr3 = [];

    arr1.forEach(function(elem){
        t1.add(elem, elem);
    });
    arr2.forEach(function (elem) {
        t2.add(elem, elem);
    });

    t1.getKeys().forEach(function (elem) {
        if(t2.containsKey(elem)) {
            arr3.push(elem);
        }
    });

    return arr3;
}

var arr1 = [1,2,3,3,4,2,3,5];
var arr2 = [3,4,4,3,5,7,8];
console.log(intersect (arr1, arr2));
