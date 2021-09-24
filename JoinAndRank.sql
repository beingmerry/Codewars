
--Not my solution, from jgdodson, Adeel, tomaspinos, peyuking09, almugu24, shailnjuser, vatsal, fredc, C@stor24, lwolf1983 2021-09-24
SELECT p.*, COUNT(*) AS sale_count, RANK() OVER (ORDER BY COUNT(*) DESC) AS sale_rank 
FROM people p JOIN sales s ON p.id = s.people_id
GROUP BY p.id

--My solution, partially completed
SELECT *
FROM people
INNER JOIN(
  SELECT sales.people_id, count(sales.people_id) as sales_count
  FROM sales
  GROUP BY sales.people_id
) AS sales ON sales.people_id = people.id
