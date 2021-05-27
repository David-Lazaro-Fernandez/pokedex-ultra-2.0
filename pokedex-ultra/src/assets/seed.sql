CREATE TABLE IF NOT EXISTS user(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    uid TEXT, 
    gender TEXT
);

CREATE TABLE IF NOT EXISTS favorite_pkmn(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pkmn_id INTEGER, 
    FOREIGN KEY(user) REFERENCES user(id)
);

INSERT or IGNORE INTO user(id, uid, gender) VALUES (1, 'xd', 'm');
INSERT or IGNORE INTO favorite_pkmn(id, pkmn_id, user) VALUES (1, 1, 1);
