import React from "react";

const Player = () => {
  return (
    <div id="content">
      <section id="player">
        <h2>Welcome </h2>
        <p>
          <input type="text" className="player__input" />
          <button className="player__button">Set Name</button>
        </p>
      </section>
    </div>
  );
};

export default Player;
