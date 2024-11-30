import PropTypes from "prop-types";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavbarComponent(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg`}
      style={{
        backgroundColor: props.mode.bgColor,
        color: props.mode.color,
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          style={{
            color: props.mode.color,
          }}
          to="/"
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{
                  color: props.mode.color,
                }}
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{
                  color: props.mode.color,
                }}
                to="/"
              >
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="themeRadio"
                id="redTheme"
                onClick={() => {
                  props.handleTheme({ bgColor: "red", color: "white" });
                }}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="themeRadio"
                id="greenTheme"
                onClick={() => {
                  props.handleTheme({ bgColor: "green", color: "white" });
                }}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="themeRadio"
                id="darkTheme"
                onClick={() => {
                  props.handleTheme({ bgColor: "black", color: "white" });
                }}
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="themeRadio"
                id="lightTheme"
                onClick={() => {
                  props.handleTheme({ bgColor: "white", color: "black" });
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;

NavbarComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
