import React, { Component } from 'react';
import LocationSuggestions from './LocationSuggestions';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import { locationAPI } from '../config';

// CSS
import {
  LocationSearch,
  Input,
  Button
} from '../css/location';

class LocationSearchBar extends Component {
  state = {
    locations: [],
    textInput: '',
    keyboardSelectedIndex: null,
    mouseSelectedIndex: null
  }

  // close location suggestions when user clicks away from this component
  componentWillMount () {
    document.addEventListener('mousedown', this.handleClickAway, false);
  }

  handleClickAway = event => {
    // do nothing if user has clicked within this component
    if (this.element.contains(event.target)) return;

    // otherwise, close location suggestions
    this.setState({ locations: [] })
  }

  // handles enter, up, down and tab key presses
  handleNonTextInput = event => {
    const {
      locations,
      keyboardSelectedIndex,
      mouseSelectedIndex,
      textInput
    } = this.state;

    const updateIndex = i => {
      return i == null ? 0 : i < locations.length - 1 ? i + 1 : i;
    }

    // highlight selections on down key presses
    if (event.keyCode === 40) {
      this.setState({
        keyboardSelectedIndex: mouseSelectedIndex !== null ? mouseSelectedIndex + 1 : updateIndex(keyboardSelectedIndex),
        mouseSelectedIndex: null
      })
    }

    // highlight selection on up key presses
    if (event.keyCode === 38) {
      this.setState({
        keyboardSelectedIndex: mouseSelectedIndex !== null ? mouseSelectedIndex - 1 : !keyboardSelectedIndex ? null : keyboardSelectedIndex - 1,
        mouseSelectedIndex: null
      })
    }

    // stop the input cursor moving unnecessarily on up or down presses
    if (event.keyCode === 38 || event.keyCode === 40) event.preventDefault();

    // if user presses enter or tab on a dropdown selection, populate the input field with it
    if ((event.keyCode === 13 || event.keyCode === 9) && keyboardSelectedIndex !== null) {
      this.setState({
        textInput: locations[keyboardSelectedIndex],
        keyboardSelectedIndex: null
      })
    }

    // if the user has selected a suggested location or has typed in a custom one, submit the form on enter key press
    if ((event.keyCode === 13 && locations.includes(textInput)) ||
        (event.keyCode === 13 && textInput && keyboardSelectedIndex === null && mouseSelectedIndex === null)) {
      return this.handleFormSubmit();
    }

    // submit the form if user presses the enter key while the "Search" key is highlighted
    if (event.keyCode === 13 && event.target.innerText === "Search") {
      return this.handleFormSubmit();
    }
  }

  handleTextInput = event => {
    this.setState({ textInput: event.target.value }, () => {
      const { textInput, locations } = this.state;

      // if the input text length is than 3 characters or it completely matches an item in the locations array, there's no need to fetch data and waste a network call
      if (textInput.length < 3 || locations.includes(textInput)) return;

      // call the locations API and update the state
      this.getLocations(textInput)
    });
  }

  getLocations = query => {
    axios({
      url: `https://crossorigin.me/${locationAPI}${query}`,
      adapter: jsonpAdapter,
    })
    .then(data => {
      const { data: locations } = data;
      this.setState({ locations: this.sanitiseData(locations) })
    });
  }

  sanitiseData = data => data.filter(item => item === "" || item === "%s" ? false : true);

  handleFormSubmit = event => {
    // retrieve necessary post data to submit the form
    console.log('Form submitted');
  }

  // populate the input field when user clicks on a selection
  handleLocationClick = event => {
    this.setState({
      keyboardSelectedIndex: 0,
      locations: [],
      textInput: event.currentTarget.innerText
    });
  };

  handleMouseEnter = index => {
    this.setState({ mouseSelectedIndex: index, keyboardSelectedIndex: null })
  }

  handleMouseLeave = () => {
    this.setState({ mouseSelectedIndex: null })
  }


  render () {
    const {
      state: {
        locations,
        textInput,
        keyboardSelectedIndex,
        mouseSelectedIndex
      },
      handleTextInput,
      handleNonTextInput,
      handleFormSubmit,
      handleLocationClick,
      handleMouseEnter,
      handleMouseLeave
    } = this;

    return (
      <LocationSearch ref={element => this.element = element}>
        <Input
          placeholder="Location"
          type="text"
          onChange={handleTextInput}
          onKeyDown={handleNonTextInput}
          value={textInput || ''}
        />
        <LocationSuggestions
          locations={locations}
          handleLocationClick={handleLocationClick}
          keyboardSelectedIndex={keyboardSelectedIndex}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          mouseSelectedIndex={mouseSelectedIndex}
          textInput={textInput || ''}
        />
        <Button
          onClick={handleFormSubmit}
          onKeyDown={handleNonTextInput}
        >
        Search
        </Button>
      </LocationSearch>
    );
  }
}

export default LocationSearchBar;
