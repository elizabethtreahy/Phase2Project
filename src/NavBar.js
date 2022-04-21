import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div style={{ display: 'flex' }}>
      <NavLink
        to="/"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        <img style={{ height: "50px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
      </NavLink>
      <div style={{ justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ position: 'relative' }}>hello, feelings</h1>
      </div>
      {/* <NavLink to="/"
        exact>
        LIVE
      </NavLink>
      <NavLink to="/"
        exact>
        LET FLY
      </NavLink>
      <NavLink to="/"
        exact>
        JOURNAL
      </NavLink>
      <NavLink to="/"
        exact>
        DRAFTS
      </NavLink> */}
    </div>
  );
}

export default NavBar;