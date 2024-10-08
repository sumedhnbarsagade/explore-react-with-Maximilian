import React, { useState } from "react";


function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //setIsEditing(!isEditing); // true
    setIsEditing((editing) => !editing);
  }

  function handleChange(e){
    setPlayerName(e.target.value)
  }

  let editablePlayerName = (
    <span className="player-name" style={{ color: "red" }}>
      {playerName}
    </span>
  );

  if (isEditing === true) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
