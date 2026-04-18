import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="user-container">
      <h1>User List</h1>

      <div className="user-list">
        {users.map((user) => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => handleClick(user.id)}
          >
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;