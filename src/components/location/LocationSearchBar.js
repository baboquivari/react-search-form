import React, { Component } from 'react';
import Button from './Button';
import LocationDropdown from './LocationDropdown';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { locationAPI } from '../../config';

class LocationSearchBar extends Component {
  state = {
    locations: [],
    textInput: '',
    showDropdown: false
  }

  handleInputChange = event => {
    event.persist();
    this.setState({ textInput: event.target.value }, () => {
      this.getLocations(this.state.textInput)
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('Form submitted');
  }

  getLocations = query => {
    axios({
      url: `${locationAPI}${query}`,
      adapter: jsonpAdapter,
    })
    .then((res) => {
      console.log(res);
    });
  }

  render() {
    // TODO: Read this https://reactjs.org/docs/forms.html#the-select-tag

    const { showDropdown, textInput } = this.state;

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            placeholder="Location"
            onChange={this.handleInputChange}
          />
          <span>
            <button
              onClick={this.onButtonClick}>
              Search
            </button>
          </span>
        </form>

        { showDropdown && <LocationDropdown /> }
      </div>
    );
  }
}

export default LocationSearchBar;
