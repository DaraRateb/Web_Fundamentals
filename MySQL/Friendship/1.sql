SELECT users.first_name, user2.first_name as friend_first_name from users
JOIN friendships ON users.id=friendships.user_id
LEFT JOIN users as user2 ON user2.id = friendships.friend_id
where user2.first_name like"%Kermit%"