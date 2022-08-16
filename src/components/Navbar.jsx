import React from "react";
import { NavItem } from "./NavItem.";

export const Navbar = () => {
  return(
    <nav class="flex justify-between py-5 px-20 shadow-md">
      <h3 class="font-bold text-ellipsis">Yorm</h3>
      <ul class="flex gap-5">
        <NavItem menu="Home" />
        <NavItem menu="Products" />
        <NavItem menu="Services" />
        <NavItem menu="About" />
        <NavItem menu="Contact" />
      </ul>
    </nav>
  );
}