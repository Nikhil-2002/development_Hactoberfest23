import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Typography } from "@material-ui/core";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper
        className="navbar nav-bar-expand-sm navbar-dark px-sm-5"
        style={{
          backgroundColor: "black",
        }}
      >
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-10">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography
                style={{
                  fontSize: "2.2rem",
                  fontFamily: "Smooch",
                }}
              >
                SwiftCart
              </Typography>
            </Link>
          </li>
        </ul>
        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          <i className="fas fa-cart-plus"></i>
        </Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3 rem;
    text-transform: capitalize;
  }
`;
