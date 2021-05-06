select actor.actor_id, concat(actor.first_name," ", actor.last_name) as actor_name,
film.title, film.description,
film.release_year  from actor
join film_actor on film_actor.actor_id=actor.actor_id
join film on film.film_id=film_actor.film_id
where actor.actor_id=5
