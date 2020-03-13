create table products (
    id serial primary key,
    name varchar(100),
    price integer,
    imgurl varchar(3000)
);


insert into products (
    name,
    price,
    imgurl
) values 
('shirt', 20, 'shirt.com'),
('shoe', 25, 'shoe.com'),
('steel', 2, 'steel.com');


insert into products (
    name,
    price,
    imgurl
) values 
('shirt', 20, 'shirt.com'),
('shoe', 25, 'shoe.com'),
('steel', 2, 'steel.com');