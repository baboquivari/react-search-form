import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    color: #FFFFFF;
    margin-left: 30px;
    margin-top: 20px;
`
const Header = props => {
  return (
    <HeaderStyles>
        <h1>For a better working life</h1>
        <h1>The new XING Jobs</h1>
    </HeaderStyles>
  );
};

Header.propTypes = {};

export default Header;
