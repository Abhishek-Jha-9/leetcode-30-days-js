/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let map = new Map()
    const cp = [...nums];
    cp.sort((a,b)=>a-b).map((i,indx)=>{
        if(!map.has(i)){
            map.set(i,indx);
        }
    })
    return nums.map((i)=>map.get(i));

};