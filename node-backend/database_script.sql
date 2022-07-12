drop schema bugtracker;
create schema bugtracker;
use bugtracker;

create table if not exists project(
	project_id int not null auto_increment,
    project_name varchar(16) not null,
    -- date_started date not null,
    -- date_completed date default null,
    status varchar(16) not null,
    primary key(project_id),
    check(status = "in progress" or status = "completed")
);

create table if not exists user(
	user_id int not null auto_increment,
    first_name varchar(16) not null,
    last_name varchar(16) not null,
    email varchar(16) not null,
    password varchar(16) not null,
    primary key(user_id)
);

create table if not exists bug(
	bug_id int not null auto_increment,
    bug_name varchar(16) not null,
    project_id int not null,
    status varchar(16) not null,
    priority varchar(8) not null,
#     date_raised date not null,
#     date_solved date default null,
    notes varchar(64),
	primary key(bug_id),
    foreign key (project_id) references project(project_id) on delete cascade,
    check(status = "in progress" or status = "solved"),
    check(priority = "low" or priority = "medium" or priority = "high")
);

