import React, { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";

const ParcelInput = (props) => {
  const [enteredParcelName, setEnteredParcelName] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("Mumbai");

  console.log(props.selectedParcel, "parcel");

  useEffect(() => {
    setEnteredParcelName("");
    setSelectedGroup("Mumbai");
  }, [props.selectedParcel]);

  return (
    <React.Fragment>
      <div className="parcel-input-container">
        <div className="parcel-input">
          <label>Enter Name: </label>
          <input
            type="text"
            placeholder="Enter Parcel Name"
            value={enteredParcelName}
            onChange={(e) => setEnteredParcelName(e.target.value)}
          />
        </div>
        <div className="parcel-input">
          <label>Select Location Group: </label>
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
          >
            {props.locations.map((location) => (
              <option key={location.id} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ButtonContainer
        {...props}
        name={enteredParcelName}
        group={selectedGroup}
      />
    </React.Fragment>
  );
};

export default ParcelInput;
