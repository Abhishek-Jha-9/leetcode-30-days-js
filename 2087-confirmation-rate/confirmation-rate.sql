/* Write your T-SQL query statement below */
select s.user_id , 
round(avg( case 
                when c.action='confirmed' then 1.00 
                else 0 
            end),
            2)
  as confirmation_rate
from Signups s 
left join Confirmations c on s.user_id = c.user_id
group by s.user_id

-- total  no of request per user_id in confirmation table
-- select c.user_id ,count(c.action) 
-- from Confirmations  c
-- group by c.user_id;