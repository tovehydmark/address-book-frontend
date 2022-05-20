import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { AddContact } from "./components/AddContact";
import { ShowContacts } from "./components/ShowContacts";

function App() {
  return (
    <>
      <AddContact></AddContact>
      <ShowContacts></ShowContacts>
    </>
  );
}

export default App;
