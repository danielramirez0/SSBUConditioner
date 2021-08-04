import "./NavBar.css";
import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectAuth } from "../../features/login/LoginSlice";

const NavBar = () => {
  const authenticated = useSelector(selectAuth);
  // const dispatch = useDispatch();

  return (
    <div className="row row-cols-1 h-100">
      <div className="col flex-column h-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark h-100">
          <div className="container-fluid flex-column">
            <a href="//#endregion" className="navbar-brand">
              {`<(' .' <)`}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggle"
              aria-controls="navbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggle">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="http://localhost:3000/">
                    Welcome
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:3000/training">
                    Training
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:3000/matchup-analyzer">
                    Matchup Analyzer
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:3000/characters">
                    Characters
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={authenticated ? "nav-link" : "nav-link disabled"}
                    href="http://localhost:3000/profile"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Progress Tracking
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="http://localhost:3000/tournaments"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Tournaments
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:3000/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
