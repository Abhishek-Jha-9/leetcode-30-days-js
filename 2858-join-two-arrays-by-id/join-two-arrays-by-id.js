/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let data  = {};
    for(const val of arr1){
        data[val.id] =val;
    }
    for(let i =0;i<arr2.length;i++){
        if(data[arr2[i].id]){
           for(const key  in arr2[i]){
               data[arr2[i].id][key] = arr2[i][key];
           }
         }else{
            data[arr2[i].id] = arr2[i];
        }
    }
    return Object.values(data);
};