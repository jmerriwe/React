import React, { useState } from "react";
import "./App.css";


function RenderPerson(props) {
  return (
    <div>
      <p>
        {props.name} - {props.email}
      </p>
      <button onClick={props.deleteHandler}>Remove</button>
    </div>
  );
}

const initialContacts = [
  {
    id: 0,
    name: "Jenetta",
    email: "jenetta@go.com",
  },
  // create 2 more objects
  {
    id: 1,
    name: "Jane",
    email: "jane@hello.com",
  },

  {
    id: 2,
    name: "John",
    email: "john@bye.com",
  },
];

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [searchText, setSearchText] = useState("");
  const [contacts, setContacts] = useState(initialContacts);
  console.log("contacts");

  const sortHandler = () => {
    const copyContacts = [...contacts];
    copyContacts.sort((x, y) => x.name.localeCompare(y.name));
    setContacts(copyContacts);
  };

  const addHandler = () => {
    if (name === "" || email === "") {
      return alert("both field must be filled");
    }

    // Validate email address
    // REGEX LETS YOU SEARCH TEXT AND CHECK/CHANGE IT
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const isValidEmail = validateEmailRegex.test(email); // Returns true

    if (!isValidEmail) {
      return alert("invalid email");
    }

    // initialContacts.push({
    //   name: "Jenetta",
    //   email: "jenetta@go.com",
    // });

    setContacts([
      ...contacts,
      {
        id: Math.random(),
        name: name,
        email: email,
      },
    ]);
    setName("");
    setEmail("");

    console.log({
      name,
      email,
    });
  };

  const deleteHandler = (id) => {
    // console.log("deleteHandler");
    // console.log(id)
    const up = contacts.filter((a) => a.id !== id);
    setContacts(up);
  };

  const searchHandler = (event) => {
    const text = event.target.value;
    //    console.log(event.target.value)
    setSearchText(text);
    console.log("1");

    // let text = "Visit W3Schools";
    // let n = text.search(/w3schools/i);
  };

  const filtered = contacts.filter((item) => {
    // create a function inside to filter
    // "Jenetta" the computer will check if whatever we are typing is included in the name
    return (
      item.name.toLowerCase().includes(searchText.toLowerCase) ||
      item.email.toLowerCase().includes(searchText.toLowerCase)
    );
    
  });

  return (
    <div>
      <h2>Contact Search</h2>
      {/* SEARCH BAR SECTION */}
      <input
        placeholder="search"
        type="text"
        value={searchText}
        // onChange={searchHandler}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="btn" onClick={sortHandler}>
        {" "}
        A to Z
      </button>
      {/* ADD INFO SECTION */}
      Enter a name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Contact Search</h2>
      Enter an email:
      <input
        type="text"
        value={email}
        // onChange={emailHandler}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn" onClick={addHandler}>
        Add
      </button>
      {filtered.map((person, index) => (
        <RenderPerson
          key={person.id}
          name={person.name}
          email={person.email}
          deleteHandler={() => deleteHandler(person.id)}
        />
      ))}
    </div>
  );
}
