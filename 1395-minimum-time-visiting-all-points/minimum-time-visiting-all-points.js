/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    return points.slice(1).reduce((ans, [x, y], i) => 
        ans + Math.max(Math.abs(x - points[i][0]), Math.abs(y - points[i][1]))
    , 0);
};