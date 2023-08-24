import React from 'react';
import Employee1 from './Employee1.js';

function EmployeeList() {
    const employees = [
        {
            id: 1,
            name: 'Naveen',
            salary: 50000,
            place: 'Banglore'
        },
        {
            id: 2,
            name: 'Suresh',
            salary: 60000,
            place: 'Karnool'
        },
        {
            id: 3,
            name: 'Shankar M',
            salary: 50000,
            place: 'Chennai'
        }
    ];

    return (
        <div style={{ display: 'flex',height:220,margin:50,gap:20}}>
            {employees.map((employee) => (
                <Employee1
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    salary={employee.salary}
                    place={employee.place}
                />
            ))}
        </div>
    );
}

export default EmployeeList;
