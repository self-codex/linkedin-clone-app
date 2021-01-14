import React from "react";
import LinkedinIcon from "../images/in.png";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import "./header.css";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img className="inImage" src={LinkedinIcon} alt="linked in icons" />
        <div className="header__searchBox">
          <SearchIcon className="searchIcon" />
          <input type="text" placeholder="Search Your linked " />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleAltIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Message" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={AccountCircleIcon} title="Me" />
        <HeaderOption Icon={AppsIcon} title="Work" />
      </div>
    </div>
  );
}

export default Header;
