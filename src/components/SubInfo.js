import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom";

function SubInfo() {
  //state that holds and sets the data from the fetch request to backend project
  const [subscrption, setSubscription] = useState([]);

  const match=useRouteMatch();
  const newid = match.path[14]

  //use fetch method to aquire the data
  //useEffect to only render once to prevent loop or multiple renders
  useEffect(() => {
    fetch(`http://localhost:3100/subscriptions/${newid}`)
      .then((res) => res.json())
      .then((data) => setSubscription((subscrption) => (subscrption = data)));
  }, []);

  // return subscription information
  return (
    <div className="c">
      <img alt="none" src={subscrption.logo} />
      <h2>{subscrption.type}</h2>

      <span className="meta">Price: {subscrption.price}</span>
    </div>
  );
}

export default SubInfo;
