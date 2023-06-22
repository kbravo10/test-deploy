import React, { useEffect, useState } from "react";
import Subscription from "./Subscription";
import SubInfo from "./SubInfo";

function Body() {
  //useState that holds and sets the info of fetch data
  const [subdcriptions, setSubscriptions] = useState([]);
  const [subId, setSubId] = useState();
  const [clicked, setClicked] = useState(false);

  //useEffect that only renders once when the application loads and fetchges data from backend
  useEffect(() => {
    fetch(`http://localhost:3100/subscriptions`)
      .then((res) => res.json())
      .then((data) => setSubscriptions(data));
  }, []);

  function chooseSubmission(id) {
    console.log(id);
    setSubId(id);
    setClicked(true);
  }

  //returns a set of cards displayimg the information on subsciption
  return (
    <div className="cards">
      {clicked ? (
        <SubInfo id={subId} />
      ) : (
        <div>
          {subdcriptions.map((subscription, index) => {
            return (
              <div key={index}>
                <Subscription
                  key={index}
                  sub={subscription}
                  onChooseSubscription={chooseSubmission}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Body;
