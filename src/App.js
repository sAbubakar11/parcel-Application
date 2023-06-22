import React, { useState } from "react";
import { PARCEL_DATA } from "./assets/dummy-data/parcels";
import Header from "./components/Header";
import "./App.css";
import Parcels from "./components/Parcels";
import SelectedParcel from "./components/SelectedParcel";
import ParcelInput from "./components/ParcelInput";
import { locations } from "./assets/dummy-data/locations";

const App = () => {
  const [parcels, setParcels] = useState(PARCEL_DATA);
  const [selectedParcel, setSelectedParcel] = useState(null);

  const handleParcelClick = (parcel) => {
    if (selectedParcel === parcel) {
      setSelectedParcel(null);
    } else {
      setSelectedParcel(parcel);
    }
  };

  const handleAddAfter = (selectedParcel, addedParcel) => {
    if (!selectedParcel) {
      alert("Please select a parcel first!");
    } else if (addedParcel.name && addedParcel.group) {
      const newParcel = {
        ...addedParcel,
        id: Math.random(),
        sequence: selectedParcel.sequence + 1,
      };

      const updatedParcels = [...parcels];
      updatedParcels.splice(selectedParcel.sequence, 0, newParcel);

      for (
        let i = selectedParcel.sequence + 1;
        i < updatedParcels.length;
        i++
      ) {
        updatedParcels[i].sequence++;
      }

      setParcels(updatedParcels);
      setSelectedParcel(null);
    }
  };

  const handleAddBefore = (selectedParcel, addedParcel) => {
    if (!selectedParcel) {
      alert("Please select a parcel first!");
    } else if (addedParcel.name && addedParcel.group) {
      const newParcel = {
        ...addedParcel,
        id: Math.random(),
        sequence: selectedParcel.sequence,
      };

      const updatedParcels = parcels.map((parcel) => {
        if (parcel.sequence >= selectedParcel.sequence) {
          return {
            ...parcel,
            sequence: parcel.sequence + 1,
          };
        }
        return parcel;
      });

      updatedParcels.splice(selectedParcel.sequence - 1, 0, newParcel);

      setParcels(updatedParcels);
      setSelectedParcel(null);
    }
  };

  const handleReplace = (selectedParcel, addedParcel) => {
    if (!selectedParcel) {
      alert("Please select a parcel first!");
    } else if (addedParcel.name && addedParcel.group) {
      const updatedParcels = parcels.map((parcel) => {
        if (parcel.id === selectedParcel.id) {
          return {
            ...parcel,
            ...addedParcel,
          };
        }
        return parcel;
      });

      setParcels(updatedParcels);
      setSelectedParcel(null);
    }
  };

  const handleDelete = (selectedParcel) => {
    if (!selectedParcel) {
      alert("Please select a parcel first!");
    } else {
      const updatedParcels = parcels.filter(
        (parcel) => parcel.id !== selectedParcel.id
      );

      const adjustedParcels = updatedParcels.map((parcel, index) => ({
        ...parcel,
        sequence: index + 1,
      }));

      setParcels(adjustedParcels);
      setSelectedParcel(null);
    }
  };

  const handleRefresh = () => {
    setParcels(PARCEL_DATA);
  };

  const handleShowFinal = () => {
    console.log(parcels);
  };

  return (
    <div className="App">
      <Header locations={locations} />
      <Parcels
        parcels={parcels}
        onSelect={handleParcelClick}
        selectedParcel={selectedParcel}
      />
      <SelectedParcel selectedParcel={selectedParcel} />
      <ParcelInput
        onAddAfter={handleAddAfter}
        onAddBefore={handleAddBefore}
        onDelete={handleDelete}
        onReplace={handleReplace}
        onRefresh={handleRefresh}
        onShowFinal={handleShowFinal}
        selectedParcel={selectedParcel}
        locations={locations}
      />
    </div>
  );
};

export default App;
