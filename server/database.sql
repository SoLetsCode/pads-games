CREATE DATABASE IF NOT EXISTS puppy-games;

CREATE TABLE puppy_games(
    game_id BIGSERIAL PRIMARY KEY, 
    title VARCHAR(255),
    description VARCHAR(255),
    instruction TEXT[],
    goal VARCHAR(255),
    challenge VARCHAR(255)
);
