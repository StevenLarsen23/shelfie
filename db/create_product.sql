INSERT INTO products
(name, price, img)
VALUES
($1, $2, $3);

--# If controller has an object use: 
--# INSERT INTO products
--# (name, price, img)
--# VALUES
--# ($name, $price, $img);