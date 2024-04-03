/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let size = Object.keys(obj).length ?? obj.length
    return Boolean(!size);
    
};