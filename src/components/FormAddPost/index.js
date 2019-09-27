import React from "react";

import { Container, RowInfos, RowActions, Avatar, BoxText } from "./styles";
import Button from "../../styles/components/Button";

export default function FormAddPost({ handleClose }) {
  return (
    <Container>
      <RowInfos>
        <Avatar src="https://api.adorable.io/avatars/50/abott@adorable.png" />
        <BoxText placeholder="O que você está pensando?" />
      </RowInfos>

      <RowActions>
        <Button onClick={handleClose} color="gray" filled>
          Fechar
        </Button>
        <Button>Enviar</Button>
      </RowActions>
    </Container>
  );
}
