/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newArr =[];
    for(let i =0;i<arr.length;i++){
        let bool = fn(arr[i],i);
        if(bool) newArr.push(arr[i]);
    }
    return newArr;
};