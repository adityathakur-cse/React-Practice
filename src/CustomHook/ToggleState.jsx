import React from "react";
import useToggle from "./UseToggle";

const ToggleState = () => {
  const [toggle, changeToggle] = useToggle();

  return (
    <div>
      <h1>{toggle}</h1>
      <button onClick={changeToggle}>
        {toggle === "OFF" ? "Turn ON" : "Turn OFF"}
      </button>
    </div>
  );
};

export default ToggleState;
