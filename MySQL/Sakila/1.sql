select customer.first_name, customer.last_name, customer.email, customer.address_id from customer
join address on address.address_id=customer.address_id
join city on city.city_id=address.city_id
where city.city_id=312
