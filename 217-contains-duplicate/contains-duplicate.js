/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const val =  new Set();
    nums.forEach(i=>{
        val.add(i)
    })
    return Boolean(!(val.size==nums.length))
};