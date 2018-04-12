import React from "react";
import "./membership.css";

export default function Membership(){
    return(
        <div className="container">
            <a href="http://localhost:4200/auth/">
                <button>BECOME A MEMBER</button>
            </a>
        </div>
    )
}

// -- drop table members

// -- select * 
// -- from members

/*
insert into members (
    date_created,
    name,
    phone_home,
    phone_cell,
    email,
    address,
    city,
    state,
    zip,
    abana_bool,
    abana_num,
    referred_by
)
values (
    '4/20/2018',
    'Rick Sanchez',
    '5078819972',
    '5072134725',
    'ricksanchez@c137.com',
    '4242 Brookshire St',
    'Syracuse',
    'UT',
    '84075',
    'yes',
    '71-5097-2',
    'Referred by Member'
);

CREATE TABLE members (
    id serial primary key,
    date_created varchar(10),
    name varchar(80),
    phone_home varchar(15),
    phone_cell varchar(15),
    email varchar(64),
    address varchar(128),
    city varchar(64),
    state varchar(2),
    zip varchar(12),
    abana_bool varchar(3),
    abana_num VARCHAR(32),
    referred_by varchar(32)
 );
 */