import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom border-body bg-dark fixed-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          <img src="./img/beers.png" className="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" aria-current="page" to={"/"}>
              Home
            </NavLink>
            <NavLink className="nav-link" to={"/beers"}>
              Beers
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
