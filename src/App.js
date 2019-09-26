import React from "react";
import {
  GlobalStyle,
  Container,
  AppHeader,
  HeaderTitle,
  AddBtn
} from "./globalStyle";
import Card from "./components/Card";

import { MdAdd } from "react-icons/md";
import Modal from "./components/Modal";
import FormAddPost from "./components/FormAddPost";

function App() {
  return (
    <>
      <div className="App">
        <Container>
          <AppHeader>
            <HeaderTitle>Posts</HeaderTitle>
            <AddBtn>
              <MdAdd /> Novo
            </AddBtn>
          </AppHeader>

          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
      </div>

      <Modal>
        <FormAddPost />
      </Modal>

      <GlobalStyle />
    </>
  );
}

export default App;
