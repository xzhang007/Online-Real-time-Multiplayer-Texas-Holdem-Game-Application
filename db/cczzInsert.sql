INSERT INTO users (username, email, password, money, ranking, image_path)
VALUES
  ('cli12', 'cli12@mail.sfsu.edu', '123', 100, 1, './images/chip.png'),
  ('daydreamerlee', 'daydreamerlee@gmail.com', '456', 100, 2, './images/chip.png'),
  ('john', 'jrob@sfsu.edu', '456', 100, 3, './images/chip.png');

INSERT INTO rooms (id, dealer_pid, small_blind, player_amount)
VALUES
	(1,1,100,200),
	(2,2,200,400),
	(3,3,300,600);

INSERT INTO rounds (id, room_id, all_bet, current_bet, next_player, active_player_number)
VALUES
	(1, 1, 500, 10, 3, 4),
	(2, 2, 100, 5,2, 4);

INSERT INTO messages (id, user_id, message_timestamp, content, room_id)
VALUES
	(1, 1, NOW(), 'hello', 1);

