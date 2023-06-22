import React, { useEffect, useState } from "react";

function SubInfo({ id }) {
  const [subscrption, setSubscription] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3100/subscriptions/${id}`)
      .then((res) => res.json())
      .then((data) => setSubscription((subscrption) => (subscrption = data)));
  }, []);

  console.log(subscrption.logo);

  return (
    <form className="c">
        <img alt="none" src={subscrption.logo} />
      <h2>{subscrption.type}</h2>
      
      <span className="meta">Price: {subscrption.price}</span>
    </form>
  );
}

export default SubInfo;
