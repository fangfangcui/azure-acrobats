--Question 1: a: Do households spend less or more for one household?
--Time series chart: 
with uniq_trans as (
-- remove duplicates
select distinct basket_num, hshd_num, product_num, purchase_date::timestamp, cast(spend as float)
from kroger.transactions 
where btrim(hshd_num) = '0010'
)
select hshd_num, date_trunc('week', purchase_date::timestamp) as purchase_week, sum(spend) as weekly_spending
from uniq_trans
group by hshd_num, purchase_week
order by purchase_week


--Julia: you just need to replace 0010 with any other house hold number to get calculation for that household
-- you can just display the results of this calculation in text messages
with uniq_trans as (
-- remove duplicates
select distinct basket_num, hshd_num, product_num, purchase_date::timestamp, cast(spend as float)
from kroger.transactions 
where btrim(hshd_num) = '0010'
),
min_max_date as (
select hshd_num, min(purchase_date) as min_transdate, max(purchase_date) as max_transdate
from uniq_trans
group by hshd_num
), 
trans_midpoint as (
select uniq_trans.hshd_num, purchase_date, spend, min_transdate + (max_transdate - min_transdate)/2 as mid_transdate
from uniq_trans 
left join min_max_date
on uniq_trans.hshd_num = min_max_date.hshd_num
)
select hshd_num, case when purchase_date < mid_transdate then 'early_half' else 'later_half' end time_group, sum(spend) as total_spending
from trans_midpoint
group by hshd_num, time_group
--hshd_num 0010 spent $5155 in early half of time, and spent $4299 in later half of the time. therefore, spend 5155-4299 = 856 less in later half of the time 


--Question 1 b: What categories are growing or shrinking with changing customer engagement?
--Question 1 c: How might we re-engage customers within the store? Or within a specific category?
--Julia, You just need to replace the 0010 with any household number to get calculations for that household
--You can show a bar chart for the following sql results
--Answer: send out coupons for categories that sees the most decreases to reengage with customer. For example, hshd 0010 will be tobacco products in commodity code
with uniq_trans as (
-- remove duplicates
select distinct basket_num, hshd_num, product_num, purchase_date::timestamp, cast(spend as float)
from kroger.transactions 
where btrim(hshd_num) = '0010'
),
uniq_prod as (
select distinct product_num, department, commodity, brand_ty, natural_organic_flag
from kroger.products
),
min_max_date as (
select hshd_num, min(purchase_date) as min_transdate, max(purchase_date) as max_transdate
from uniq_trans
group by hshd_num
), 
trans_midpoint as (
select uniq_trans.hshd_num, uniq_trans.product_num, purchase_date, spend, min_transdate + (max_transdate - min_transdate)/2 as mid_transdate, department, commodity, brand_ty, natural_organic_flag 
from uniq_trans 
left join min_max_date
on uniq_trans.hshd_num = min_max_date.hshd_num
left join uniq_prod
on uniq_trans.product_num = uniq_prod.product_num
),
commodity_calc as (
select case when purchase_date < mid_transdate then 'early_half' else 'later_half' end time_group, commodity, sum(spend) as total_spend
from trans_midpoint
group by commodity, time_group
order by commodity, time_group
), 
commodity_wind as (
select time_group, commodity, total_spend, LAG(total_spend,1) OVER (partition by commodity) early_half_spending
from commodity_calc
),
commodity_delta as (
select commodity, (total_spend - early_half_spending) as later_half_minus_first_half
from commodity_wind
where early_half_spending is not null
)
select * from commodity_delta
order by later_half_minus_first_half


--Question 2: Which demographic factors (e.g. household size, presence of children, income) appear to affect customer engagement?
--How do they affect customer engagement with certain categories?  
