import Child2 from "./Child2";

function Child1({ data }) {
  return (
    <div className="box">
      <h2>Child 1</h2>
      <Child2 data={data} />
    </div>
  );
}

export default Child1;