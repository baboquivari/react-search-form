import React, { Component } from 'react';
import CategorySearchBar from './category/CategorySearchBar';
import LocationSearchBar from './location/LocationSearchBar';

class SearchForm extends Component {
  render() {
    return (
      <div>
        <CategorySearchBar/>
        <LocationSearchBar/>
      </div>
    );
  }
}

// TODO: Get some CSS to display these guys side by side.
// TODO: React Forms - https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y

export default SearchForm;
