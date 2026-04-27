import React, { useState } from "react";
import "../../styles/UserTable.css"



const UserTable = ({ users, onDelete, onUpdate }) => {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const handleEdit = (user) => {
    setEditId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const handleSave = (id) => {
    const updatedUser = {
      id,
      name: editName,
      email: editEmail,
    };
    onUpdate(id, updatedUser);
    setEditId(null);
  };

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              {editId === user.id ? (
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              ) : (
                user.name
              )}
            </td>

            <td>
              {editId === user.id ? (
                <input
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                />
              ) : (
                user.email
              )}
            </td>

            <td>
              {editId === user.id ? (
                <button onClick={() => handleSave(user.id)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(user)}>Update</button>
              )}

              <button onClick={() => onDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;