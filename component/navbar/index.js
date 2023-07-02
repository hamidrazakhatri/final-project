import React from "react";

const navbar = () => {
  return (
    <div>
      <nav className="navbar position-fixed w-100 navbar-expand-lg a">
        <div className="container-fluid">
          <div className="navbar-brand none">Khizar Farooq</div>
          <button
            className="navbar-toggler text-white "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  " />
          </button>
          <div
            className="collapse navbar-collapse m-auto  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-5 ">
              <li className="nav-item">
                <a
                  className="nav-link  b  "
                  aria-current="page"
                  href="#aboutme"
                >
                  {" "}
                  <i className="fa-solid fa-location-dot" /> &nbsp; ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  b" href="#professional">
                  {" "}
                  <i className="fa-solid fa-user-group" /> &nbsp; PROFESSIONAL
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  b" href="#professional">
                  {" "}
                  <i className="fa-solid fa-user-group" /> &nbsp; RESUME
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link b" href="#contact">
                  {" "}
                  <i className="fa-solid fa-comments" />
                  &nbsp; CONTACT
                </a>
              </li>
            </ul>
            <a
              href="https://www.linkedin.com/in/muhammad-khizar-184945114/"
              target="_blank"
            >
              {" "}
              <button type="button" className="btn btn-danger text-white">
                <i className="fa-brands fa-linkedin" /> &nbsp; Connect
                @khizarfarooq
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
