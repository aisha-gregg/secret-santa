import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);
  const isDisabled = !name.length;
  const nodeNames = nameList.map(name => <li>{name}</li>);

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
        <ul>{nodeNames}</ul>
      </div>
    </div>
  );
}

export default App;
