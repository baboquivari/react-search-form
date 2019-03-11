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
  background-color: ${props => props.selectedIndex ? "#EBEBEB" : "white"};
  border-radius: 5px;
    padding-left: 12px;
    padding-top: 7px;
    height: 33px;
    font-size: 15px;
`

const LocationSuggestions = props => {
  const { locations, handleLocationClick, selectedIndex } = props;
    { return locations.length > 0 && <Locations>
      { locations.map((location, i) => {
        return (
          <Location selectedIndex={selectedIndex === i} key={i} onClick={handleLocationClick}>{location}</Location>
        )
      })}
    </Locations> }
};

LocationSuggestions.propTypes = {};

export default LocationSuggestions;
