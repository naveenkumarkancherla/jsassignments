import React from "react";

function Transaction({ date, amount }) {
  return (
    <li>
      Date: {date}, Amount: {amount}
    </li>
  );
}

function Customer({ id, firstName, lastName, transactions }) {
  return (
    <div>
      <center>
      <h2>Customer Information</h2>
      <p>ID: {id}</p>
      <p>Name: {firstName} {lastName}</p>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <Transaction
            key={index}
            date={transaction.date}
            amount={transaction.amount}
          />
        ))}
      </ul>
      </center>
    </div>
  );
}

export default Customer;
