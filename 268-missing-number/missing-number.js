/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // sum of n numbers , 0 doesn't matter
    const sum =  (nums.length * (nums.length+1))/2
     const arrsum = nums.reduce((acc,currval)=>acc+currval,0)
     return sum - arrsum;
    
};