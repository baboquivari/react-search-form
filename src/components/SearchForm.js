import React, { Component } from 'react';
import CategorySearchBar from './category/CategorySearchBar';
import LocationSearchBar from './location/LocationSearchBar';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components'
import background from '../images/xing-bg-984x400.png';
import sea from '../images/sea.jpg';

const GlobalStyle = createGlobalStyle`
  /* Removes default rendered arrow on <datalist> elements */
  input::-webkit-calendar-picker-indicator {
	  display: none;
  }

  html, body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(${sea});
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-image: url(${background});
  width: 984px;
  height: 400px;
`

const Form = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-top: 12px;
`

class SearchForm extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Header/>
        <Form>
          <CategorySearchBar/>
          <LocationSearchBar/>
        </Form>
      </Container>
    );
  }
}

// TODO: React Forms - https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y

export default SearchForm;
