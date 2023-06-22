import React from "react";

const ParcelItem = ({ parcel, onSelect, selectedParcel }) => {
  let className = "parcel ";
  if (selectedParcel === parcel) {
    className += "selected";
  }

  return (
    <div key={parcel.id} className={className} onClick={() => onSelect(parcel)}>
      <p>{parcel.name}</p>
      <div className={parcel.group.toLowerCase()}>
        <h6>{parcel.sequence}</h6>
      </div>
    </div>
  );
};

export default ParcelItem;
