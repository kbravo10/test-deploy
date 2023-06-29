import React from "react";

function UserMonth({ sub, filter }) {
  let totalInDollars = new Intl.NumberFormat(`en-US`, {
    style: "currency",
    currency: "USD",
  });
  let sum = 0;
  sub.forEach((element) => {
    sum += element.price;
  });

  function newFilter() {
    const newText = filter.split("=")[1].toUpperCase();
    return newText;
  }
  return (
    <div className="monthly">
      <p>
        Total spent per month on {filter === "" ? "ALL" : newFilter()}{" "}
        subsciption(s)
      </p>
      <p>{totalInDollars.format(sum)}</p>
    </div>
  );
}
export default UserMonth;
