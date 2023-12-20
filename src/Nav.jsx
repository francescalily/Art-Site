import { NavLink, Outlet } from "react-router-dom";

function Nav() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
      <nav>
        <h1>Logo</h1>
        <ul className="nav-links">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
          <NavLink
            to="/resident"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Resident Artists
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
