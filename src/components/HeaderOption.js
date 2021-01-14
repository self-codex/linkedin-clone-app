import { Avatar } from "@material-ui/core";
import React from "react";
import "./headerOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" />}
      <h3 className="title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
