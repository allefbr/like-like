import React from "react";

import { Container } from "./styles";

export default function FormAddPost() {
  // logica

  return (
    <Container>
      <h1>Adicionar posts</h1>

      <form>
        <textarea>Digite o que quiser</textarea>
        <button>Adicionar</button>
      </form>
    </Container>
  );
}
