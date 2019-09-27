import React from "react";

import { Container, SignForm } from "./styles";
import Button from "../../../styles/components/Button";

export default function Signin() {
  return (
    <Container>
      <SignForm>
        <h1>Boas Vindas</h1>

        <span>E-MAIL</span>
        <input name="email" type="text" />

        <span>SENHA</span>
        <input name="password" type="password" />

        <Button size="big">Entrar</Button>
      </SignForm>
    </Container>
  );
}
