import Child1 from "./Child1";
import "../styles/Nested.css";

function ParentNested()  {
  const message = "Hello from Parent Component ";

  return (
    <div className="container">
      <h1>Parent Component</h1>
      <Child1 data={message} />
    </div>
  );
}

export default ParentNested;