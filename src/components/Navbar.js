import React, { Component } from "react";

import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

import { FaAlignRight } from "react-icons/fa";
import { Button } from "@material-ui/core";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">
                <Button fullWidth={true}>Home</Button>
              </Link>
            </li>
            <li>
              <Link to="/rooms">
                <Button fullWidth={true}>Rooms</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
