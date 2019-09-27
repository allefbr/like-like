import React from "react";

import { Link } from "react-router-dom";
import { Container, Logo, Nav } from "./styles";
import { MdPersonAdd, MdAssignment, MdExitToApp } from "react-icons/md";

export default function Menu() {
  return (
    <Container>
      <Logo />
      <Nav>
        <Link to="/posts" title="Posts">
          <MdAssignment />
        </Link>
        <Link to="/users" href="#" title="Add Users">
          <MdPersonAdd />
        </Link>
      </Nav>

      <Link to="/" title="Exit">
        <MdExitToApp />
      </Link>
    </Container>
  );
}
