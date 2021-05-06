
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name,
concat(actor.first_name," ",actor.last_name) as actor_name
from actor
join film_actor on film_actor.actor_id=actor.actor_id
join film on film.film_id=film_actor.film_id
join film_category on film_category.film_id=film.film_id
join category on category.category_id=film_category.category_id
where concat(actor.first_name," ",actor.last_name) like"%SANDRA KILMER%" and category.name like"%Action%"


