import React, { Component } from 'react';
import CategoryDropdown from './CategoryDropdown';
import CategorySuggestions from './CategorySuggestions';
import categories from '../../data/categories';
import styled from 'styled-components'

// rename
const Search = styled.div`
  margin-left: 30px;
  width: 442px;
`
const EnterKeyword = styled.div`
  display: flex;
`
const Input = styled.input`
  border-radius: 5px;
`
const ShowDropdownButton = styled.div`

`

class SearchForm extends Component {
  state = {
    categories: categories,
    textInput: '',
    showDropdown: false
  }

  handleInputChange = event => {
    this.setState({ textInput: event.target.value });
  }

  handleButtonClick = event => {
    event.preventDefault();
    const { showDropdown } = this.state;
    const { type: elementType } = event.target;

    this.setState({
      showDropdown: elementType === 'text' && !showDropdown ? showDropdown : !showDropdown
    });
  }

  render () {
    const { categories, textInput, showDropdown } = this.state;

    return (
      <Search>
        <EnterKeyword>
          <Input
            placeholder="Enter keyword"
            onChange={this.handleInputChange}
            onClick={this.handleButtonClick}
            value={textInput}
          />
          <ShowDropdownButton onClick={this.handleButtonClick}>
              <p>in all categories</p>
          </ShowDropdownButton>
        </EnterKeyword>

        { showDropdown && <CategoryDropdown /> }

        {/* <CategorySuggestions/> */}
      </Search>
    );
  }

   // nice new way to encapsulate all your prop defintions! DO I NEED THIS? I think it's only good for props received in a stateful comp.
  //  static defaultProps = {};
  //  static propTypes = {};
}

export default SearchForm;

