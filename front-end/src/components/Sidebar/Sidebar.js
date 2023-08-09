import React from "react";
import Categories from "../Categories/Categories";

function Sidebar() {
  return (
    <div className="sidenav ">
      <div className="sidenav-content">
        <ul className="nav nav-pills flex-column  align-items-center align-items-sm-start ca">
          <Categories />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
