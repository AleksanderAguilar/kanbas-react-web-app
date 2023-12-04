import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
function Nav() {
  return (
    <>
     <div>
        <div className="nav list-group">

          <Link
            to="/Project/home"
            className={`nav-link list-group-item`}
          >
            Home
          </Link>

          <Link
            to="/Project/search"
            className={`nav-link list-group-item`}
          >
            Search
          </Link>

          <Link
            to="/Project/signin"
            className={`nav-link list-group-item`}
          >
            Signin
          </Link>

          <Link
            to="/Project/signup"
            className={`nav-link list-group-item`}
          >
            Signup
          </Link>
          <Link
            to="/Project/account"
            className={`nav-link list-group-item`}
          >
            Account
          </Link>
        </div>
        </div>
    </>
  );
}

export default Nav;
