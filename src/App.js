import React, { useState } from "react";
import "./App.css";

import styles from "./App.module.css";

function App() {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);
  const [isShuffled, setIsShuffled] = useState(false);

  const isDisabled = !name.length;

  const nodeNames = nameList.map(name => (
    <li key={name}>
      {name}
      {isShuffled && <input readOnly={true} type="password" value={name} />}
    </li>
  ));

  return (
    <div>
      <h1>Welcome to the secret santa App</h1>
      <div>
        <input
          onChange={event => setName(event.target.value)}
          type="text"
          value={name}
          placeholder="Name"
        ></input>
        <button
          disabled={isDisabled}
          onClick={() => {
            setNameList([...nameList, name]);
            setName("");
          }}
        >
          Enter
        </button>

        <button
          disabled={nodeNames.length < 3}
          onClick={() => {
            setIsShuffled(true);
          }}
        >
          Shuffle
        </button>

        <ul className={styles.wrapper}>{nodeNames}</ul>
      </div>
    </div>
  );
}
export default App;
