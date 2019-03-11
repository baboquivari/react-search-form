import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  color: #FFFFFF;
  margin-left: 30px;
  margin-top: 50px;
`
const Heading = styled.h1`
  line-height: 22px;
`
const Header = props => {
  return (
    <HeaderStyles>
        <Heading>For a better working life</Heading>
        <Heading>The new XING Jobs</Heading>
    </HeaderStyles>
  );
};

Header.propTypes = {};

export default Header;
