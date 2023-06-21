import React from "react";

function Subscription({ sub }) {
  return (
    <div>
      <div>
        <h3>{sub.type}</h3>
        
        <span>{sub.price}</span>
      </div>
      <img src={sub.logo} />
    </div>
  );
}

export default Subscription;
