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
  const [assignedNames, setAssignedNames] = useState([]);

  const isDisabled = !name.length;

  const nodeNames = nameList.map((name, index) => (
    <li className={styles.list} key={index}>
      {name + " "}
      {isShuffled && (
        <>
          <input
            className={styles.inputs}
            readOnly={true}
            type={isShown[index] ? "text" : "password"}
            value={assignedNames[index]}
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
    <div className={styles.section}>
      <h1 className={styles.header}>Welcome to the secret santa App</h1>

      <div className={styles.wrapper}>
        <div className={styles.form}>
          <input
            className={styles.inputs}
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
            hidden={nodeNames.length >= 3 ? !isShown : isShown}
            onClick={() => {
              setIsShuffled(true);
              const assignedNames = assignmentService.assign(nameList);
              setAssignedNames(Object.values(assignedNames));
            }}
          >
            Assign Secret Santas!
          </button>
        </div>
        <ul className={styles.list}>{nodeNames}</ul>
      </div>
    </div>
  );
}
export default App;
