create table shelfie (
    id serial primary key,
    name varchar(60),
    price int,
    img text
)

insert into shelfie (name, price, img)
values 
('iPhone', 1100, 'img.test'),
('Note10', 1100, 'img.test1'),
('LGV10', 1100, 'img.test2'),
('MacBook', 11100, 'img.test3'),
('Asus Strix', 800, 'img.test4');

select * from shelfie