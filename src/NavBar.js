import React from "react";
import { NavLink } from "react-router-dom";
import SaveAsIcon from '@mui/icons-material/SaveAs';

function NavBar() {
  return (
    <div style={{ textAlign: 'center', boxShadow: '0 -1px 0 #000 inset'}}>
      <NavLink to="/" exact>
       <SaveAsIcon className={'postIcon'} fontSize='large' />
      </NavLink>
      <div style={{ justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ position: 'relative', textAlign: 'center' }}>HELLO, feelings.</h1>
      </div>
    </div>
  );
}

export default NavBar;