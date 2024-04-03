/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((res,rej)=>{
        let size = functions.length;
        let arr = new Array(functions.length);
            functions.forEach((fun,i) =>{
            fun().then(result=>{
                arr[i]  = result;
                size--;
                if(size === 0){
                    res(arr);
                }
                
            }).catch((e)=>{
                 rej(e)
            })
        })
    })
    
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */