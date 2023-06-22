import React from "react";

const ButtonContainer = ({
  onAddAfter,
  onAddBefore,
  onDelete,
  onReplace,
  onRefresh,
  onShowFinal,
  selectedParcel,
  name,
  group,
}) => {
  return (
    <div className="actions">
      <button
        onClick={() => onAddAfter(selectedParcel, { name, group })}
      >
        Add After
      </button>
      <button
        onClick={() => onAddBefore(selectedParcel, { name, group })}
      >
        Add Before
      </button>
      <button
        onClick={() => onReplace(selectedParcel, {name, group})}
      >
        Replace
      </button>
      <button
        onClick={() => onDelete(selectedParcel)}
      >
        Delete
      </button>
      <button onClick={onRefresh}>Refresh</button>
      <button onClick={onShowFinal}>Show Final</button>
    </div>
  );
};

export default ButtonContainer;
