import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>

      <nav>
        <Link to="">Food List</Link> |{" "}
        <Link to="add">Add Food</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Admin;