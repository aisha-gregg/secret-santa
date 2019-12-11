import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);
  const nameNodes = [];
  let isDisabled = false;

  for (let i = 0; i < nameList.length; i++) {
    nameNodes.push(<li>{nameList[i]}</li>);
  }

  if (name === "") {
    isDisabled = true;
  }

  return (
    <div>
      <h1>Welcome to the secret santa App</h1>
      <div>
        <input
          onInput={event => setName(event.target.value)}
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

        <ul>{nameNodes}</ul>
      </div>
    </div>
  );
}

export default App;
