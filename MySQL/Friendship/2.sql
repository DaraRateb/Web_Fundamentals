SELECT count(users.first_name) from users
JOIN friendships ON users.id=friendships.user_id
