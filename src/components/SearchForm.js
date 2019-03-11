import React, { Component } from 'react';
import CategorySearchBar from './category/CategorySearchBar';
import LocationSearchBar from './location/LocationSearchBar';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components'
import background from '../images/xing-bg-red-984x400.png';
import sea from '../images/sea.jpg';

const GlobalStyle = createGlobalStyle`
  @import url(//fonts.googleapis.com/css?family=Open+Sans);

  /* Enables scrollbar visibility */
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px #EBEBEB;
  }

  /* Removes default rendered arrow on <datalist> elements */
  input::-webkit-calendar-picker-indicator {
	  display: none;
  }

  html, body {
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    width: 100%;
    /* height: 100vh; */
    /* background-image: url(${sea}); */
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
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
  height: 44px;
  width: 100%;
  margin-top: 12px;
`

class SearchForm extends Component {
  render () {
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
