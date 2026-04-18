import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/UserData.css";

function UserData() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!user) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <h1>User Details</h1>

      <div className="details-card">
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Phone:</strong> {user?.phone}</p>
        <p><strong>Website:</strong> {user?.website}</p>

        <h3>Company</h3>
        <p>{user?.company?.name}</p>

        <h3>Address</h3>
        <p>{user?.address?.street}</p>
        <p>{user?.address?.city}</p>
        <p>{user?.address?.zipcode}</p>
      </div>
    </div>
  );
}

export default UserData;


