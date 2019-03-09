import React, { Component } from 'react';
import CategorySearchBar from './category/CategorySearchBar';
import LocationSearchBar from './location/LocationSearchBar';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Removes default rendered arrow on <datalist> elements */
  input::-webkit-calendar-picker-indicator {
	  display: none;
  }
`

class SearchForm extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <CategorySearchBar/>
        <LocationSearchBar/>
      </div>
    );
  }
}

// TODO: React Forms - https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y

export default SearchForm;
