import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./main.css";

//returns card information based on object passed by prop
function Subscription({ sub }) {
  return (
    <div className="card">
      <div>
        <div>
          <div>
            <h3>{sub.type}</h3>
          </div>
          <img className="subscriptionImage" alt="oops" src={sub.logo} />
        </div>
      </div>
      <Link className="link" to={`/subscription/${sub.id}`}>
        View Subscription
      </Link>
    </div>
  );
}

export default Subscription;
