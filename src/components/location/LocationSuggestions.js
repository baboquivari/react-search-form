import React from 'react';
import styled from 'styled-components';

const Locations = styled.ul`
  position: absolute;
  list-style-type: none;
  display: flex;
  background-color: white;
  flex-direction: column;
    margin-left: 1px;
    width: 291px;
    margin-top: 44px;
    padding: 12px;
    display: flex;
    border-radius: 5px;
    padding: 0;

`
const Location = styled.li`
  background-color: ${props => props.keyboardSelectedIndex || props.mouseSelectedIndex ? "#EBEBEB" : "white"};
  border-radius: 5px;
  padding-left: 12px;
  padding-top: 7px;
  height: 33px;
  font-size: 15px;
  cursor: pointer;
`

const LocationSuggestions = props => {
  const {
    locations,
    handleLocationClick,
    keyboardSelectedIndex,
    mouseSelectedIndex,
    handleMouseEnter,
    handleMouseLeave,
    textInput
  } = props;

    { return locations.length > 0 && !locations.includes(textInput) && <Locations>
      { locations.map((location, i) => {
        return (
          <Location
            keyboardSelectedIndex={keyboardSelectedIndex === i}
            key={i}
            onClick={handleLocationClick}
            onMouseEnter={handleMouseEnter.bind(null, i)}
            onMouseMove={handleMouseEnter.bind(null, i)}
            onMouseLeave={handleMouseLeave}
            mouseSelectedIndex={mouseSelectedIndex === i}
            >
            {location}
          </Location>
        )
      })}
    </Locations> }
};

LocationSuggestions.propTypes = {};

export default LocationSuggestions;
