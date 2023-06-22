import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom";
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min"

//returns card information based on object passed by prop
function Subscription({ sub, onChooseSubscription }) {
  // const [subId, setSubId] = useState("");
  // const match = useRouteMatch();
  // console.log(match)

  function handleClick() {
    onChooseSubscription(sub.id);
  }
  return (
    <div>
      <div>
      <div className="ui cards">
        <div>
          <h3>{sub.type}</h3>
        </div>
        <img alt="oops" src={sub.logo} />
      </div>
      </div>
      <Link to={`/subscription/${sub.id}-subscription`} onClick={handleClick}>View Subscription</Link>
    </div>
    
  );
}

export default Subscription;
