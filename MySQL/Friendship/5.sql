SELECT USERS.first_name, user2.first_name as friend_first_name from users
join friendships on friendships.user_id=users.id
left join users as user2 on user2.id=friendships.friend_id
where users.first_name like"%Eli%" or user2.first_name like"%Eli%" order by friend_first_name 

