CREATE TABLE message
(
    id      SERIAL PRIMARY KEY,
    message VARCHAR(63),
    sender  VARCHAR(63)
);