import { useState } from "react";
import { NewUser } from "../models/NewUser";
import { makeRequest } from "./MakeRequest";

export function AddContact() {
  //Variables for user inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  //Ensures that the site isn't updated when form is submitted + clears input fields
  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setUsername("");
    setEmail("");
    setNumber("");
  };

  //Saves info from user input and sends to postNewUser
  function saveContact(username: string, email: string, number: string) {
    let userToSend = new NewUser(username, email, number);

    //Using makeRequest file for posting data to server
    makeRequest("http://localhost:1337/users/addcontact", "post", userToSend);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Namn: </label>
        <input
          type="text"
          value={username}
          id="name"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="number">Nummer: </label>
        <input
          type="number"
          value={number}
          id="number"
          onChange={(e) => setNumber(e.target.value)}
        />

        <button onClick={() => saveContact(username, email, number)}>
          Spara kontakt
        </button>
      </form>
    </>
  );
}
