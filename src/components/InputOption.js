import React from "react";
import "./inputOption.css";

function InputOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
      <Icon className="icon" style={{ color: color }} />
      <p>{title}</p>
    </div>
  );
}

export default InputOption;
