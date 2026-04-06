import Child from "./childprops";

function Parent() {
  return (
    <div>
      <h1> props</h1>

      <Child
        name="Noor"
        email="noor@gmail.com"
        role="Frontend Developer"
      />

      <Child
        name="Ashik"
        email="ashik@gmail.com"
        role="Backend Developer"
      />

      <Child
        name="Rahman"
        email="rahman@gmail.com"
        role="UI Designer"
      />

      <Child
        name="Naveen"
        email="naveen@gmail.com"
        role="React Developer"
      />

      <Child
        name="Sara"
        email="sara@gmail.com"
        role="Full Stack Developer"
      />
    </div>
  );
}

export default Parent;