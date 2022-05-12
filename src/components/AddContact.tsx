import axios from "axios";
import { useState } from "react";

export function AddContact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function saveContact() {
    console.log(userName);
    console.log(email);
    console.log(phone);

    //Fix new user object
    const newUser = { username: userName, email: email, phone: phone };

    //Posts the new contact to server
    axios
      .post("http://localhost:3000/addcontact", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <>
      <form action="">
        <label htmlFor="name">Namn: </label>
        <input
          type="text"
          value={userName}
          id="name"
          onChange={(e) => setUserName(e.target.value)}
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
          value={phone}
          id="number"
          onChange={(e) => setPhone(e.target.value)}
        />

        <button onClick={saveContact}>Spara kontakt</button>
      </form>
    </>
  );
}
