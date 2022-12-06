create table studentdetails(
	idno int primary key,
    rfidno varchar(20) not null unique,
    firstname varchar(20) not null,
    lastname varchar(20) not null,
    age int,
    gender varchar(10),
    dept varchar(30),
    year int
);

create table recordEnter(
	rfidEnter varchar(20) not null,
    enterTime datetime default now()
);

create table recordExit(
	rfidExit varchar(20) not null,
    exitTime datetime default now()
);

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password'; 
flush privileges;