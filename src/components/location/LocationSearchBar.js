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
    keyboardSelectedIndex: null,
    mouseSelectedIndex: null
  }

  handleInputChange = event => {
    // ignore any up or down arrows
    if (event.keyCode === 40 || event.keyCode === 38 || event.keyCode === 13) return;

    this.setState({ textInput: event.target.value }, () => {
      const { textInput, locations } = this.state;

      // if the input text is empty or matches an item in the locations array, don't fetch any data
      if (!textInput || locations.includes(textInput)) return;

      // TODO: add a debounce function here to limit over-calling?
      this.getLocations(textInput)
    });
  }

  handleKeyDown = event => {
    const {
      locations,
      keyboardSelectedIndex,
      mouseSelectedIndex,
      textInput
    } = this.state;

    const updateIndex = i => {
      return i == null ? 0 : i < locations.length - 1 ? i + 1 : i;
    }

    // handle form submits via enter-key presses on the Search key
    if (event.keyCode === 13 && event.target.innerText === "Search") {
      event.preventDefault();
      return this.handleFormSubmit();
    }

    // stop the input cursor moving unnecessarily
    if (event.keyCode === 38 || event.keyCode === 40) event.preventDefault();

    // if the user is currently making a selection with the mouse and then switches to using keys, render accordingly FIXME:
    if (mouseSelectedIndex !== null) {

    }

    // TODO: if the user has selected something and has pressed enter, submit the form
    if (event.keyCode === 13 && locations.includes(textInput)) {
      return this.handleFormSubmit();
    }

    // if user presses enter or tab and there is a selection active, populate the input field with the selection
    if (event.keyCode === 13 || event.keyCode === 9 && keyboardSelectedIndex !== null) {
      console.log('enter populates field')
      this.setState({
        textInput: locations[keyboardSelectedIndex],
        keyboardSelectedIndex: null
      })
    }

    // post the form when selectedIndex is nothing
    // if (keyboardSelectedIndex === null && !locations.length && textInput) {
    //   return this.handleFormSubmit();
    // }

    // down presses
    if (event.keyCode === 40) {
      this.setState({
        keyboardSelectedIndex: mouseSelectedIndex !== null ? mouseSelectedIndex + 1 : updateIndex(keyboardSelectedIndex),
        mouseSelectedIndex: null
      })
    }

    // up presses
    if (event.keyCode === 38) {
      this.setState({
        keyboardSelectedIndex: mouseSelectedIndex !== null ? mouseSelectedIndex - 1 : keyboardSelectedIndex - 1,
        mouseSelectedIndex: null
      })
    }
  }

  handleFormSubmit = event => {
    console.log('Form submitted');
  }

  handleLocationClick = event => {
    this.setState({
      keyboardSelectedIndex: 0,
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

  handleMouseEnter = index => {
    this.setState({ mouseSelectedIndex: index, keyboardSelectedIndex: null })
  }

  handleMouseLeave = () => {
    this.setState({ mouseSelectedIndex: null })
  }

  // export out?
  sanitiseData = data => data.filter(item => item !== "%s");

  render () {
    const {
      handleInputChange,
      handleKeyDown,
      handleFormSubmit,
      handleLocationClick,
      handleMouseEnter,
      handleMouseLeave,
      state: {
        locations,
        textInput,
        keyboardSelectedIndex,
        mouseSelectedIndex
      }
    } = this;

    return (
      <LocationSearch>
        <Input
          placeholder="Location"
          type="text"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={textInput || ''}
        />
        <LocationSuggestions
          locations={locations}
          handleLocationClick={handleLocationClick}
          keyboardSelectedIndex={keyboardSelectedIndex}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          mouseSelectedIndex={mouseSelectedIndex}
          textInput={textInput}
        />
        <Button
          onClick={handleFormSubmit}
          onKeyDown={handleKeyDown}
        >
        Search
        </Button>
      </LocationSearch>
    );
  }
}

export default LocationSearchBar;
