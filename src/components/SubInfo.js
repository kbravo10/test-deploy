import React from "react";

function SubInfo({ id }) {
  return (
    <div className="subscriptionInfo">
      {/* <h1>{subscription.type}</h1> */}
      <p>{id}</p>
    </div>
  );
}

export default SubInfo;
