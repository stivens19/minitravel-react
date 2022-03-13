import React from "react";
import { NavLink } from 'react-router-dom';

const LinkActive = ({to,classActive,children}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? classActive : undefined)}
    >
      {children}
    </NavLink>
  );
};

export default LinkActive;
