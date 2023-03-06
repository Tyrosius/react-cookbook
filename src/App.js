import { createClient } from "contentful"
import './App.css';
import { useState, useEffect } from "react";
function App() {
  const client = createClient({
    space: "ge9j2kgjaink",
    accessToken: "sTqTi2aDlEQqUaqMjFihRlAIBVvxdaxX8O-x74pvpPU",
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
