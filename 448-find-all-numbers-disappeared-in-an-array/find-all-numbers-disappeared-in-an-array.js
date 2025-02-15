/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const ans = []
    const s =  new Set();
    nums.forEach(i=>s.add(i));
    //  iterate through the set and find missing number
    for(let i=1;i<=nums.length;i++){
        if(!s.has(i)){
            ans.push(i)
        }
    }

    return ans;
    
};