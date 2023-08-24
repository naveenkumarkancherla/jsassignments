import React from 'react';

function Employee1(p) {
    return (
        <div style={{ border: '2px solid gray', width: 300,padding:25}}>
            <h3>Id: {p.id}</h3>
            <h3>Name: {p.name}</h3>
            <h3>Salary: {p.salary}</h3>
            <h3>Place: {p.place}</h3>
        </div>
    );
}

export default Employee1;
