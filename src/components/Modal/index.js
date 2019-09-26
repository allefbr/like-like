import React from "react";

import { Container, ModalOverflow, ButtonIcon } from "./styles";
import { MdClose } from "react-icons/md";

export default function Modal({ children }) {
  return (
    <>
      <Container>
        {children}

        <ButtonIcon>
          <MdClose />
        </ButtonIcon>
      </Container>
      <ModalOverflow />
    </>
  );
}
