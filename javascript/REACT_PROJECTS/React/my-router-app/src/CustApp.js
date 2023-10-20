import React from "react";
import Customer from "./Customer";

function CustApp() {
  const customerData = {
    id: 1099,
    firstName: "Naveen",
    lastName: "Kancherla",
    transactions: [
      { date: "2023-08-11", amount: 1000 },
      { date: "2023-08-15", amount: -150 },
      { date: "2023-08-20", amount: 2000 },
    ],
  };

  return (
    <div >
      <center>
      <Customer
        id={customerData.id}
        firstName={customerData.firstName}
        lastName={customerData.lastName}
        transactions={customerData.transactions}
      />
      </center>
    </div>
  );
}

export default CustApp;
