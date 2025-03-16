/* Write your T-SQL query statement below */
select a1.machine_id ,round(avg(a2.timestamp - a1.timestamp),3) as processing_time
from Activity a1
Join Activity a2 on a1.machine_id=a2.machine_id
WHERE a1.activity_type='start' AND a2.activity_type='end'
 group by a1.machine_id;