import { Avatar } from "@material-ui/core";
import React from "react";
import "./sidebar.css";
import ProfileBack from "../images/profileBack.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img className="profile__back" src={ProfileBack} alt="profile pix" />
        <Avatar className="sidebar__avatar" />
        <h2 className="title">M.Talha</h2>
        <h4 className="skills">ReactJS Developer</h4>
        <h6 className="contact">mtalha@gmail.com</h6>
      </div>
      <div className="sidebar__status">
        <div className="sidebar__stats">
          <p className="status__views">who views your profile</p>
          <p className="status__num">4,863</p>
        </div>
        <div className="sidebar__stats">
          <p className="status__views">who views your Posts</p>
          <p className="status__num">3,235</p>
        </div>
      </div>
      <div className="sidebar__bottom"></div>
    </div>
  );
}

export default Sidebar;
