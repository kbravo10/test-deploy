import React from "react";

function UserMonth({ sub }) {
  let sum = 0;
  sub.forEach((element) => {
    sum += element.price;
  });
  return (
    <div className="monthly">
      <p>TOTAL SPENT PER MONTH</p>
      <p>$ {sum}</p>
    </div>
  );
}
export default UserMonth;
