import React from "react";

const HeaderItem = ({ location }) => {
  return (
    <div className={`header-item ${location.name.toLowerCase()}`}>
      <h6>{location.name}</h6>
    </div>
  );
};

export default HeaderItem;
