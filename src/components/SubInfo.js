import React, { useEffect, useState } from "react";

function SubInfo({ id }) {
  //state that holds and sets the data from the fetch request to backend project
  const [subscrption, setSubscription] = useState([]);

  //use fetch method to aquire the data
  //useEffect to only render once to prevent loop or multiple renders
  useEffect(() => {
    fetch(`http://localhost:3100/subscriptions/${id}`)
      .then((res) => res.json())
      .then((data) => setSubscription((subscrption) => (subscrption = data)));
  }, []);

  // return 
  return (
    <card className="c">
      <img alt="none" src={subscrption.logo} />
      <h2>{subscrption.type}</h2>

      <span className="meta">Price: {subscrption.price}</span>
    </card>
  );
}

export default SubInfo;
