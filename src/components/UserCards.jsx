import customHook from "./customHook";
import "../styles/Users.css";

function UserCards() {
  const { users, loading, error } = customHook();

  if (loading) return <h2 className="status">Loading...</h2>;
  if (error) return <h2 className="status">{error}</h2>;

  return (
    <div className="container">
      <h1>User Cards</h1>

      <div className="grid">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>

            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>City:</strong> {user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCards;