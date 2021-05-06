select customer.first_name, customer.last_name, customer.email, address.address,
customer.store_id from customer
join address on address.address_id=customer.address_id
where address.city_id in(1,42,312,45) and customer.store_id=1



 