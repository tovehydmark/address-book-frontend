import { useEffect, useState } from "react";
import { NewUser } from "../models/NewUser";
import { makeRequest } from "./MakeRequest";

export function ShowContacts() {
  const [contacts, setContacts] = useState<NewUser[]>([]);

  useEffect(() => {
    getContacts();
  }, []);

  //Gets contacts from server
  async function getContacts() {
    let fetchContacts = await makeRequest(
      "http://localhost:1337/users/addcontact",
      "GET"
    );
    setContacts(fetchContacts);
  }

  //Prints contacts on webb page
  let allContacts = contacts.map((contact: NewUser) => {
    return (
      <article key={contact.number}>
        <h2>Namn: {contact.username}</h2>
        <p>Email: {contact.email}</p>
        <p>Telefon: {contact.number}</p>
      </article>
    );
  });

  return <>{allContacts}</>;
}
