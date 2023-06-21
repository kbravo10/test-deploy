import React from "react";

function SubInfo({subscription}){
     console.log(subscription)
    return(
        <div className="subscriptionInfo">
            <h1>{subscription.type}</h1>
        </div>
    )
}

export default SubInfo;