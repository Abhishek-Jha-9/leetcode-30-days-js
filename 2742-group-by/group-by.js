/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let data ={};
    for(let i=0;i<this.length;i++){
         let key  = fn(this[i]);
        let exits = key in data ;
        
        if(!exits){
            let temp  =[]
            temp.push(this[i])
            data[key] = temp; 
        }else{
            data[key].push(this[i])
        }
    }
    return data;
    
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */