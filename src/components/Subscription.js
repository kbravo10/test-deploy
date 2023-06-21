import React from "react";


//returns card information based on object passed by prop
function Subscription({ sub, onChooseSubscription }) {

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
