UPDATE members 
SET date_created = $1, name = $2, phone_home = $3, phone_cell = $4, email = $5, address = $6, city = $7, state = $8, zip = $9, abana_bool = $10, abana_num = $11, referred_by = $12
WHERE auth_id = $13
