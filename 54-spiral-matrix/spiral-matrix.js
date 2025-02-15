/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
     let  ans = [];
    if (!matrix.length || !matrix[0].length) return ans;
    while (matrix.length){
        // pick for right
        ans.push(...matrix.shift())
     
        // pick for down
      for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].length) ans.push(matrix[i].pop());
        }

        // pick left
        if(matrix.length){
            ans.push(...matrix.pop().reverse()) 
        }

        // pick up
     for (let i = matrix.length - 1; i >= 0; i--) {
            if (matrix[i].length) ans.push(matrix[i].shift());
        }
    }
    return ans;
    
};