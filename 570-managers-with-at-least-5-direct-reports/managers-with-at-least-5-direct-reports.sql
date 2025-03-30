/* Write your T-SQL query statement below */
-- select e.name
-- , count(e.name)  cnt
--  from Employee e join Employee ee on  e.id=ee.managerId and count(e.name)>=5
-- --  group by e.id,e.name;

SELECT e.name
FROM Employee e  
JOIN Employee ee  
    ON e.id = ee.managerId  
GROUP BY ee.managerId  ,e.name 
HAVING COUNT(ee.managerId) >= 5;
