import React from "react";
import { I18n } from "@aws-amplify/core";
import logo from "./logo.svg";
import dict from "./AppI18n";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{I18n.get("Hello NTNUI Calisthenics")}</p>
        <button onClick={() => I18n.setLanguage("en")}>
          {I18n.get("Change to english")}
        </button>
        <button onClick={() => I18n.setLanguage("no")}>
          {I18n.get("Change to norwegian")}
        </button>
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

I18n.putVocabularies(dict);
I18n.setLanguage("no");

export default App;
