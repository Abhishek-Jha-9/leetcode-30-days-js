/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let map = new Map();
      [...nums].sort((a, b) => a - b).forEach((num, idx) => 
        map.has(num) || map.set(num, idx)
    );
    return nums.map((i)=>map.get(i));

};