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