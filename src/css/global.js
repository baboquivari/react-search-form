import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url("//fonts.googleapis.com/css?family=Open+Sans");

  html, body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }

  /* Custom scrollbar in CategoryDropdown */
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px #EBEBEB;
  }
`
