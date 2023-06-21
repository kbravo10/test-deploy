import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import SubInfo from "./SubInfo";

//returns card information based on object passed by prop
function Subscription({ sub, onChooseSubscription }) {
  const [subId, setSubId] = useState("")
  const match = useRouteMatch();

  function handleClick(){
    console.log(sub)
    console.log(sub.id)
    setSubId(subId => subId = sub.id)
  }
  return (
    <div>
      <button className="subCard" onClick={handleClick}>
        <div>
          <h3>{sub.type}</h3>
        </div>
        <img alt="oops" src={sub.logo} />
      </button>
      <Route path={`${match.url}/${subId}`} exact>
        <SubInfo subscription={sub}/>
      </Route>
    </div>
  );
}

export default Subscription;
