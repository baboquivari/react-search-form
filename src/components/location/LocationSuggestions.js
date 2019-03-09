import React from 'react';
import styled from 'styled-components';

const LocationSuggestions = props => {
  const { locations } = props;

  return (
    <datalist id="locations">
      {locations.map((location, i) => <option key={i} value={location}/>)}
    </datalist>
  )
};

LocationSuggestions.propTypes = {};

export default LocationSuggestions;
