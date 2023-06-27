import React from "react";

function UserMonth({ sub }) {
 

  let sum = 0;
  sub.forEach((element) => {
    sum += element.price
  });
  return <span>{sum}</span>;
}
export default UserMonth;
