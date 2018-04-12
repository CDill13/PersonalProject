CREATE TABLE IF NOT EXISTS members (
    id serial primary key,
    date_created VARCHAR(10),
    name VARCHAR(80),
    phone_home VARCHAR(15),
    phone_cell VARCHAR(15),
    email VARCHAR(64),
    address VARCHAR(128),
    city VARCHAR(64),
    state VARCHAR(2),
    zip VARCHAR(12),
    abana_bool VARCHAR(3),
    abana_num VARCHAR(32),
    referred_by VARCHAR(32),
    auth_id VARCHAR(128)
 );