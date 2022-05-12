export function AddContact() {
  function saveContact() {
    console.log("contact saved");
  }
  return (
    <>
      <form action="">
        <label htmlFor="name">Namn: </label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />

        <label htmlFor="number">Nummer: </label>
        <input type="number" name="number" id="number" />

        <button onClick={saveContact}>Spara kontakt</button>
      </form>
    </>
  );
}
