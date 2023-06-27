import React, { useEffect, useState } from "react";
import Subscription from "./Subscription";
import "./main.css";
import UserMonth from "./UserMonth";

function SubcriptionCollection() {
  //useState that holds and sets the info of fetch data
  const [subscriptions, setSubscriptions] = useState([]);

  //useEffect that only renders once when the application loads and fetchges data from backend
  useEffect(() => {
    fetch(`http://localhost:3000/subscriptions`)
      .then((res) => res.json())
      .then((data) => {
        setSubscriptions((subscriptions) => (subscriptions = data));
      });
  }, []);

  //returns a set of cards displayimg the information on subsciption
  return (
    <>
      <UserMonth sub={subscriptions} />
      <div className="cards">
        {subscriptions.map((subscription, index) => {
          return (
            <div key={index}>
              <Subscription key={index} sub={subscription} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SubcriptionCollection;
