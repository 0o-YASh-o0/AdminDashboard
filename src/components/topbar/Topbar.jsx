import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">YashBytes</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">5</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">5</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png" alt="" className="topAvatar"/>
        </div>
      </div>
    </div>
  );
}
