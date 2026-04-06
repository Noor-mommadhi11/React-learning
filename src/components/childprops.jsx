function Child(props) {
  return (
      <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px"
    }}>
    <div>

      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
    </div>

    </div>
  );
}

export default Child;