CREATE TABLE products(
id SERIAL PRIMARY KEY,
name VARCHAR(25),
price INT,
img VARCHAR(500)
);

INSERT INTO products
(name, price, img)
VALUES
('Batman', 40, 'https://www.closerweekly.com/wp-content/uploads/2018/05/batman.jpeg' ),
('Cyborg', 31, 'https://www.sideshow.com/storage/product-images/200513/cyborg_dc-comics_feature.jpg'),
('Superman', 25, 'https://www.elcbrands.com/media/superman1.1.jpg' ),
('The Flash', 30, 'https://filmdaily.co/wp-content/uploads/2019/12/the-flash-lede.jpg' ),
('Green Arrow', 32, 'https://www.sideshow.com/wp/wp-content/uploads/2018/08/greenarrowmaybe.jpeg'),
('Wonder Woman', 35, 'https://www.fargomoorhead.org/wp-content/uploads/2019/04/Wonder-Woman.png' ),
('Green Lantern', 27, 'https://www.denofgeek.com/wp-content/uploads/2018/07/green-lantern-reboot-grant-morrison-liam-sharp.jpg?fit=1975%2C1255' ),
('Martian Manhunter', 33, 'https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/63137/48b655ef-5e0c-4a96-8ffa-24b950bc4675.jpg' );