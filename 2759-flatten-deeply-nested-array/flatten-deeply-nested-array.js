/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let data = [];
    
    function helper(arr,depth){
        for(const val of arr){
            if(typeof val==='object' && depth<n){
                helper(val,depth+1)
               
             }else{
                data.push(val)
            }
        }
        return data;
    }
    
    return helper(arr,0);
};