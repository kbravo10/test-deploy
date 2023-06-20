import React, { useEffect, useState } from "react";

function Body() {
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setTemp(data)),
      [];
  });
  return <p>temp</p>;
}
export default Body;
