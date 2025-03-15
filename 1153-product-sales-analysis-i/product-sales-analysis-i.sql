/* Write your T-SQL query statement below */
select product_name , year , price 
from Product 
join Sales on Product.product_id=Sales.product_id;