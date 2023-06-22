import React from "react";

const SelectedParcel = ({ selectedParcel }) => {
  return (
    <div className="selected-parcel">
      Selected Parcel: <span>{selectedParcel ? selectedParcel.name : ""}</span>
    </div>
  );
};

export default SelectedParcel;
