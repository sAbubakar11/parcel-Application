import React from "react";
import HeaderItem from "./HeaderItem";

const Header = ({ locations }) => {
  return (
    <div className="header">
      {locations.map((location) => (
        <HeaderItem key={location.id} location={location} />
      ))}
    </div>
  );
};

export default Header;
