select film.title, film.description, film.release_year, film.rating, film.special_features, category.name 
from film
join film_category on film_category.film_id=film.film_id
join category on category.category_id=film_category.category_id


