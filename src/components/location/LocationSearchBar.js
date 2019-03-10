import React, { Component } from 'react';
import LocationSuggestions from './LocationSuggestions';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { locationAPI } from '../../config';
import styled from 'styled-components'

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
    width: 100%;
    font-size: 15px;
    border-radius: 5px;
    padding-left: 12px;
`
const Button = styled.button`
    flex-grow: 0.3;
    font-size: 15px;
    background-color: #D9E149;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 92px;
`

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

  // export out?
  sanitiseData = data => data.filter(item => item !== "%s");

  render() {
    const { locations, textInput, showDropdown } = this.state;

    return (
      <LocationSearch>
        <Form onSubmit={this.handleFormSubmit}>
          <Input
            placeholder="Location"
            list="locations"
            onChange={this.handleInputChange}>
          </Input>
          <LocationSuggestions locations={locations} />
        </Form>
        <Button onClick={this.handleFormSubmit}>Search</Button>
      </LocationSearch>
    );
  }
}

export default LocationSearchBar;
