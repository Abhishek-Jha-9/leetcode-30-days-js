/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    nums.forEach((a,i)=>{
        return init = fn(init,a) 
    })
    
    return init
    
};