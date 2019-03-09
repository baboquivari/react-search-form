import React, { Component } from 'react';
import Button from './Button';
import LocationSuggestions from './LocationSuggestions';
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
    this.setState({ textInput: event.target.value }, () => {
      const { textInput, locations } = this.state;

      // if the input text is empty or matches an item in the locations array, don't fetch any data
      if (!textInput || locations.includes(textInput)) return;

      // TODO: add a debounce function here to limit over-calling?
      this.getLocations(textInput)
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
    .then(data => {
      const { data: locations } = data;
      this.setState({ locations: this.sanitiseData(locations) })
    });
  }

  sanitiseData = data => data.filter(item => item !== "%s");

  render() {
    const { locations, textInput, showDropdown } = this.state;

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            placeholder="Location"
            list="locations"
            onChange={this.handleInputChange}
          />
          <LocationSuggestions locations={locations} />
          <Button/>
        </form>
      </div>
    );
  }
}

export default LocationSearchBar;
