import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./main.css"

//returns card information based on object passed by prop
function Subscription({ sub, onChooseSubscription }) {
  function handleClick() {
    onChooseSubscription(sub.id);
  }
  return (
    <div className="card">
      <div>
        <div >
          <div>
            <h3>{sub.type}</h3>
          </div>
          <img className="subscriptionImage" alt="oops" src={sub.logo} />
        </div>
      </div>
      <Link  to={`/subscription/${sub.id}-subscription`} onClick={handleClick} >
        View Subscription 
      </Link>
    </div>
  );
}

export default Subscription;
