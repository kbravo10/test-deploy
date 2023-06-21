import React, { useEffect, useState } from "react";
import Subscription from "./Subscription"
function Body() {
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/subscriptions`)
      .then((res) => res.json())
      .then((data) => setTemp(data));
  }, []);

  function print(){
    console.log(temp)
  }
  return (
    <div>
        {temp.map((sub, index) =>{
            return(
                <Subscription key={index} sub={sub}/>
            )
        })}
    </div>
  )
}
export default Body;
