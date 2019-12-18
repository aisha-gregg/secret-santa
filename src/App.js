import React, { useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import { AssignmentService } from "./AssignmentService";

function App() {
  const randomProvider = {
    provide() {
      return Math.random();
    }
  };
  const assignmentService = new AssignmentService(randomProvider);
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isShown, setIsShown] = useState([]);

  const isDisabled = !name.length;

  const nodeNames = nameList.map((name, index) => (
    <li key={index}>
      {name}
      {isShuffled && (
        <>
          <input
            readOnly={true}
            type={isShown[index] ? "text" : "password"}
            value={name}
          />
          <button
            onClick={() => {
              const isShownCopy = [...isShown];
              isShownCopy[index] = !isShownCopy[index];
              setIsShown(isShownCopy);
            }}
            key={isShown}
          >
            {isShown[index] ? "Hide" : "Show"}
          </button>
        </>
      )}
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
