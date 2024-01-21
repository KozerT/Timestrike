import React, { useState, useRef } from "react";

const Player = () => {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <div id="content">
      <section id="player">
        <h2>Welcome {enteredPlayerName ?? "user"}</h2>
        <p>
          <input type="text" className="player__input" ref={playerName} />
          <button className="player__button" onClick={handleClick}>
            Add Name
          </button>
        </p>
      </section>
    </div>
  );
};

export default Player;
