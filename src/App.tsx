import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PrintContacts } from "./components/PrintContacts";
import { AddContact } from "./components/AddContact";

function App() {
  return (
    <>
      <PrintContacts></PrintContacts>
      <AddContact></AddContact>
    </>
  );
}

export default App;
