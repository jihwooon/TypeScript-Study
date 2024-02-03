import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null)

  const handleChange = (event) => {
    setEnteredPlayerName(event.target.value)
    playerName.current.value = ''
  }

  const handleClick = () => setEnteredPlayerName(playerName.current.value)

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          onChange={handleChange}
          value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
