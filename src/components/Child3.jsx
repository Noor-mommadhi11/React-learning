import Child4 from "./Child4";

function Child3({ data }) {
  return (
    <div className="box">
      <h2>Child 3</h2>
      <Child4 data={data} />
    </div>
  );
}

export default Child3;