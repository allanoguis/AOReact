import React, { Fragment, useState } from "react";
import "../styles/App.css";

function ButtonCount() {
    const [count, setCount] = useState(0);
    function handleClick () {
        setCount(count + 1);
      };
  

  return (
    <Fragment>
      <button onClick={handleClick} className="button">
        Click ME 
      </button>
      <h2>CLICKED TIMES {count}</h2>
    </Fragment>
  );
}

export default ButtonCount;
