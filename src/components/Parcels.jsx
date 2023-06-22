import React from "react";
import ParcelItem from "./ParcelItem";

const Parcels = ({ onSelect, parcels, selectedParcel }) => {
  return (
    <div className="parcel-container">
      {parcels.map((parcel) => (
        <ParcelItem
          key={parcel.id}
          parcel={parcel}
          onSelect={onSelect}
          selectedParcel={selectedParcel}
        />
      ))}
    </div>
  );
};

export default Parcels;
