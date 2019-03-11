import React, { Component } from 'react';
import LocationSuggestions from './LocationSuggestions';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { locationAPI } from '../../config';
import styled from 'styled-components'
import { text } from '@fortawesome/fontawesome-svg-core';

const LocationSearch = styled.div`
  display: flex;
  margin-left: 15px;
  width: 400px;
  flex: 1 1 0;
`
const Form = styled.form`
  display: flex;
  flex-grow: 1;
    font-size: 10px;
`
const Input = styled.input`
  display: flex;
  margin-right: 15px;
    width: 70%;
    font-size: 15px;
    border-radius: 5px;
    padding-left: 12px;
`
const Button = styled.button`
    flex-grow: 0.3;
    font-size: 15px;
    width: 24%;
    background-color: #D9E149;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 92px;
`

class LocationSearchBar extends Component {
  state = {
    locations: [],
    textInput: '',
    selectedIndex: null
  }

  handleInputChange = event => {
    // ignore any up or down arrows
    if (event.keyCode === 40 || event.keyCode === 38) return;

    this.setState({ textInput: event.target.value }, () => {
      const { textInput, locations } = this.state;

      // if the input text is empty or matches an item in the locations array, don't fetch any data
      if (!textInput || locations.includes(textInput)) return;

      // TODO: add a debounce function here to limit over-calling?
      this.getLocations(textInput)
    });
  }

  handleKeyDown = event => {
    const { locations, selectedIndex, textInput } = this.state;

    // if the user has selected something, submit the form

    // if user presses enter
    if (event.keyCode === 13) {
      this.setState({
        locations: [],
        textInput: locations[selectedIndex],
        selectedIndex: null
      })
    }

    // if user presses down
    if (event.keyCode === 40 && selectedIndex < locations.length - 1) {
      this.setState({
        selectedIndex: selectedIndex == null ? 0 : selectedIndex + 1
      })
    }

    // if user presses up
    if (event.keyCode === 38 && selectedIndex) {
      this.setState({
        selectedIndex: !selectedIndex ? 0 : selectedIndex - 1
      })
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('Form submitted');
  }

  handleLocationClick = event => {
    this.setState({
      selectedIndex: 0,
      locations: [],
      textInput: event.currentTarget.innerText
    });
  };

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

  // export out?
  sanitiseData = data => data.filter(item => item !== "%s");

  render () {
    const {
      handleInputChange,
      handleKeyDown,
      handleFormSubmit,
      handleLocationClick,
      state: {
        locations,
        textInput,
        selectedIndex
      }
    } = this;

    return (
      <LocationSearch>
        <Input
          type="text"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={textInput}
        />
        <LocationSuggestions
          locations={locations}
          handleLocationClick={handleLocationClick}
          selectedIndex={selectedIndex}
        />
        <Button>Search</Button>
      </LocationSearch>
    );
  }
}

export default LocationSearchBar;
