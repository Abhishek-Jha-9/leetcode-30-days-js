/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const s =  new Set(nums);
    return Array.from({length:nums.length},(_,i)=>i+1).filter(i=> !s.has(i));
};