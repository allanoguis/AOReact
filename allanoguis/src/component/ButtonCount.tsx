import React, { Fragment, useState } from "react";
import "../styles/App.css";

const ButtonCount: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [colors, setColors] = useState<[string, string]>(['orange', 'red']);

  const generateColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

  const handleClick = (): void => {
    setCount(prevCount => prevCount + 1);
    setColors([generateColor(), generateColor()]);
  }

  return (
    <Fragment>
      <button 
        onClick={handleClick} 
        className="button" 
        id="submit"
        style={{ background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})` }}
      >
        Click ME 
      </button>
      <h2>CLICKED TIMES {count}</h2>
      {/* <h4>COLOR {colors[0]}</h4>
      <h4>COLOR {colors[1]}</h4> */}
    </Fragment>
  );
}


export default ButtonCount;
