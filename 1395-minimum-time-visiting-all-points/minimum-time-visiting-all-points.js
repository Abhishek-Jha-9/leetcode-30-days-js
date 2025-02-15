/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let [p1x,p1y] =  points.pop();
    let ans =0;
    while (points.length){
        const [p2x,p2y]= points.pop()
        ans += Math.max(Math.abs(p2x-p1x),Math.abs(p2y-p1y));
        [p1x,p1y] = [p2x,p2y];
    }
    return ans 
};