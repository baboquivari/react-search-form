import React, { Component } from 'react';
import CategorySearchBar from './CategorySearchBar';
import LocationSearchBar from './LocationSearchBar';
import Header from './Header';

// CSS
import { GlobalStyle } from '../css/global';
import { Container, Form } from '../css/container';

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

export default SearchForm;
