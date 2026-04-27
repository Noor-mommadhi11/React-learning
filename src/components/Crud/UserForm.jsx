import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./UserTable";
import "../../styles/UserForm.css";

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // READ (GET)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  // CREATE (POST)
  const handleAdd = () => {
    if (!name || !email) return;

    const newUser = {
      name,
      email,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
        setName("");
        setEmail("");
      })
      .catch((err) => console.log(err));
  };

  // DELETE
  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((err) => console.log(err));
  };

  // UPDATE
  const handleUpdate = (id, updatedUser) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser)
      .then(() => {
        const updatedList = users.map((user) =>
          user.id === id ? updatedUser : user
        );
        setUsers(updatedList);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h2>CRUD Operations</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleAdd}>Add</button>
      </div>

      <UserTable
        users={users}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default UserForm;