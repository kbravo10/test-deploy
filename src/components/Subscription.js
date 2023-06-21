import React from "react";

function Subscription({ sub }) {
  return (
    <div>
      <button>
        <div>
          <h3>{sub.type}</h3>
        </div>
        <img src={sub.logo} />
      </button>
    </div>
  );
}

export default Subscription;
