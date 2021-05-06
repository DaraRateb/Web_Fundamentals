select film.title, film.description, film.release_year, film.rating, film.special_features
from film
join film_actor on film_actor.film_id=film.film_id
where film.rating="G" and film.special_features like"%behind the scenes%" and film_actor.actor_id=15
 
 
