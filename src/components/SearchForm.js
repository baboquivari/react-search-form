import React, { Component } from 'react';
import CategorySearchBar from './category/CategorySearchBar';
import LocationSearchBar from './location/LocationSearchBar';

class SearchForm extends Component {
  render() {
    return (
      <div>
        <CategorySearchBar/>
        {/* <LocationSearchBar/> */}
      </div>
    );
  }
}

export default SearchForm;
