import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom";
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min"

//returns card information based on object passed by prop
function Subscription({ sub, onChooseSubscription }) {
  const [subId, setSubId] = useState("");
  const match = useRouteMatch();

  function handleClick() {
    onChooseSubscription(sub.id);
  }
  return (
    <div>
      <button className="subCard" onClick={handleClick}>
        <div>
          <h3>{sub.type}</h3>
        </div>
        <img alt="oops" src={sub.logo} />
      </button>
      <Link to={`/subscription/${sub.type}-subscription`}>View sub</Link>
    </div>
    
  );
}

export default Subscription;
