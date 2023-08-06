import React from "react";
import { StyledNavBar } from "./style";
import Button from "../components/Button/index";

const NavBar = () => {
  return (
  <StyledNavBar>
    <div></div>
    <span></span>
    <div className="titlepages">
      <div>Treatments</div>
      <div>Before & After</div>
      <div>Doctors</div>
      <div>Clinics</div>
    </div>
    <div className='login'>
      <Button className="btn" >log in</Button>
      <Button>sing up</Button>
    </div>

    
  </StyledNavBar>
  );
};

export default NavBar;
