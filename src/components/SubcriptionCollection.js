import React, { useEffect, useState } from "react";
import Subscription from "./Subscription";
import "./main.css";
import UserMonth from "./UserMonth";

function SubcriptionCollection() {
  //useState that holds and sets the info of fetch data
  const [subscriptions, setSubscriptions] = useState([]);
  const [filter, setFilter] = useState("");

  //useEffect that only renders once when the application loads and fetchges data from backend
  useEffect(() => {
    fetch(`http://localhost:3000/subscriptions${filter}`)
      .then((res) => res.json())
      .then((data) => {
        setSubscriptions((subscriptions) => (subscriptions = data));
      });
  }, [filter]);

  function onHandleSelect(event) {
    console.log(event.target.value);
    if (event.target.value === "none") setFilter((filter) => (filter = ""));
    else
      setFilter(
        (filter) => (filter = `?subscriptionType=${event.target.value}`)
      );
  }

  function onHandleSearch(event) {
    console.log(event.target.value)
  }

  //returns a set of cards displayimg the information on subsciption
  return (
    <>
      <UserMonth sub={subscriptions} filter={filter} />
      <div className="typesOf">
        <div className="filters">
          <div className="submitbutton">
            <label>Search </label>
            <input placeholder="search..." name="name" onChange={onHandleSearch}></input>
            <button type="submit">search</button>
          </div>

          <br></br>
          <label>Subscription type filter: </label>
          <select onChange={onHandleSelect}>
            <option value="none">none</option>
            <option value="streaming">streaming</option>
            <option value="shopping">shopping</option>
            <option value="insurance">insurance</option>
          </select>
        </div>
      </div>
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
