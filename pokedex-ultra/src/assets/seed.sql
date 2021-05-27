CREATE TABLE IF NOT EXISTS user(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uid TEXT, 
    photo_route TEXT
);

CREATE TABLE IF NOT EXISTS favorite_pkmn(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pkmn_id INTEGER, 
    FOREIGN KEY(user) REFERENCES user(id)
);

INSERT or IGNORE INTO user(id, uid, photo_route) VALUES (1, 'xd', 'assets/userImgs/default.jpg');
INSERT or IGNORE INTO favorite_pkmn(id, pkmn_id, user) VALUES (1, 1, 1);
