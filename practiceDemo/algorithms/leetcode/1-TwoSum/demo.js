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
    }

    this.getValue = function (key)
    {
        return this.containsKey(key) ? entry[key] : null;
    }

    this.remove = function ( key )
    {
        if( this.containsKey(key) && ( delete entry[key] ) )
        {
            size --;
        }
    }

    this.containsKey = function ( key )
    {
        return (key in entry);
    }

    this.containsValue = function ( value )
    {
        for(var prop in entry)
        {
            if(entry[prop] == value)
            {
                return true;
            }
        }
        return false;
    }

    this.getValues = function ()
    {
        var values = [];
        for(var prop in entry)
        {
            values.push(entry[prop]);
        }
        return values;
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

    this.getSize = function ()
    {
        return size;
    }

    this.clear = function ()
    {
        size = 0;
        entry = {};
    }
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hashTable = new HashTable(),
        val, pos;

    nums.forEach(function(elem, index, array) {
        hashTable.add(elem, index);
    });

    for(var i = 0; i < nums.length; i++) {
        val = target - nums[i];
        if(hashTable.containsKey(val)) {
            pos = hashTable.getValue(val);
            if(pos != i) {
                return [i, pos];
            }
        }
    }
};


var arr = [3,2,4];
indexArr = twoSum(arr, 6);
console.log(indexArr);