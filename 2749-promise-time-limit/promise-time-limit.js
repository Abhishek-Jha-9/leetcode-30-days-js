/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    
    return async function(...args) {
        return new Promise( async (resolve,reject)=>{
         let timeId = setTimeout(()=>{
                reject("Time Limit Exceeded");
            },t);
        try{
         let res= await  fn(...args);
            resolve(res);
        }catch(err){
            reject(err);
            clearTimeout(timeId)
        }
       
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */