SELECT users.first_name, COUNT(*)as friendships_count
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id 
LEFT JOIN users AS users2 ON users2.id = friendships.friend_id 
GROUP BY users.first_name
ORDER BY friendships_count DESC LIMIT 1;id