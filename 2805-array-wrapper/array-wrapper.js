/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.arr=  nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    let currsum=0;
    for(let i=0;i<this.arr.length;i++){
        currsum+=this.arr[i];
    }
    return currsum;
    
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.arr);
    
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */