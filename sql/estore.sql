create database estore
use estore
EXEC sp_helpdb
--create table 

create table Products(Product_ID int identity,Product_name varchar(100),Price float )
insert into Products values('SmartWatch', 7000 )
insert into Products values('earphones', 1200 )
insert into Products values('glasses', 300 )
select * from Products
update Products set Price = 10000 where Product_ID = 2
delete Products where Product_ID = 5