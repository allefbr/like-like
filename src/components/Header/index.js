import React from "react";

import { Container, HeaderTitle } from "./styles";
import Button from "../../styles/components/Button";

import { MdAdd } from "react-icons/md";

export default function Header({ title, handleActionButton }) {
  return (
    <Container>
      <HeaderTitle>{title}</HeaderTitle>

      <Button onClick={handleActionButton}>
        <MdAdd /> New
      </Button>
    </Container>
  );
}
