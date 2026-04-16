import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>
        We provide professional development and design services for businesses
        and startups.
      </p>

      <div style={{ marginBottom: "20px" }}>
        <Link to="web-development">Web Development</Link> |{" "}
        <Link to="app-development">App Development</Link> |{" "}
        <Link to="ui-ux">UI/UX Design</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Services;