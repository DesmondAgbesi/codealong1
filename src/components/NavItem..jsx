import React from "react";
import { NavLink } from "react-router-dom"

export const NavItem = ({label, to}) =>{
  return (
    <li>
      <NavLink to ={to}>{label}</NavLink>
    </li>
  );
}