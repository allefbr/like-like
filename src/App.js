import React from 'react';
import { GlobalStyle, Container, AppHeader, HeaderTitle, AddBtn } from './globalStyle'
import Card from './components/Card'

import { MdAdd } from "react-icons/md";

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
    <GlobalStyle />
    </>
  );
}

export default App;

