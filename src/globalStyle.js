import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root, body, html {
    height: 100%;
    font-size: 16px;
  }
  
  body {
    padding: 30px;
    background-color: #f1f1f1;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2 {    
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.17;
    letter-spacing: 0.00735em;
  }  

  input, textarea, select {
    width: 100%;
    border: 1px solid #cccc;
    padding: 5px;
    border-radius: 5;
    transition: all .2s ease-in-out;

    &:hover {
      border-color: #ddd;
    }

    &:focus {
      border-color: #222;
    }
  }

  label {
    color: rgba(0, 0, 0, 0.54);
    padding: 0;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
  }

  textarea {
    resize: none;
    height: 150px;
  }

  button {
    width: 100%;
    padding: 10px 20px;
    border: 0;
    background-color: #cccc;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: .8;
    } 
  }
`;

export const Container = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;
export const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const HeaderTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;
export const AddBtn = styled.button`
  background-color: #a18aff;
  color: #fff;
  padding: 8px 24px 8px 18px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  text-align: center;
  border: 0;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 18px;
    height: 18px;
    margin: 0 5px 0 0;

    display: flex;
  }

  &:hover {
    background-color: #927bf0;
  }
`;
