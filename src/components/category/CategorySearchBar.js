import React, { Component } from 'react';
import CategoryDropdown from './CategoryDropdown';
import CategorySuggestions from './CategorySuggestions';
import categories from '../../data/categories';
import styled from 'styled-components'

// rename
const SearchBar = styled.div`
  margin-left: 30px;
  width: 442px;
  display: flex;
  position: relative;
`
const EnterKeywordSearchField = styled.div`
  display: flex;
  flex-grow: 1;
`
const Input = styled.input`
  flex-grow: 1;
  font-size: 10px;
    border: none;
    border-radius: 5px 0 0 5px;
`
const InAllCategoriesButton = styled.div`
    flex-grow: 1;
    /* color: white; */
    background-color: white;
    border-radius: 0px 5px 5px 0;
    cursor: pointer;
    background-color: #EBEBEB;
`

class SearchForm extends Component {
  state = {
    categories: categories,
    selectedCategories: [],
    textInput: '',
    showDropdown: false
  }

  handleInputChange = event => {
    this.setState({ textInput: event.target.value });
  }

  handleButtonClick = event => {
    const { showDropdown } = this.state;
    const { type: elementType } = event.target;

    this.setState({
      showDropdown: elementType === 'text' && !showDropdown ? showDropdown : !showDropdown
    });
  }

  handleCheckboxSelect = (category, event) => {
    const { selectedCategories } = this.state;
    const { checked } = event.target;

    this.setState({
      selectedCategories:
        checked ?
        [...selectedCategories, category] :
        selectedCategories.filter(item => item !== category)
    })
  }

  render () {
    const { categories, textInput, showDropdown } = this.state;

    return (
      <SearchBar>
        <EnterKeywordSearchField>
          <Input
            placeholder="Enter keyword"
            onChange={this.handleInputChange}
            onClick={this.handleButtonClick}
            value={textInput}>
          </Input>
        </EnterKeywordSearchField>

        <InAllCategoriesButton onClick={this.handleButtonClick}>
            <p>in all categories</p>
        </InAllCategoriesButton>

        { showDropdown &&
          <CategoryDropdown
            categories={categories}
            handleCheckboxSelect={this.handleCheckboxSelect}
          /> }

        {/* <CategorySuggestions/> */}
      </SearchBar>
    );
  }

   // nice new way to encapsulate all your prop defintions! DO I NEED THIS? I think it's only good for props received in a stateful comp.
  //  static defaultProps = {};
  //  static propTypes = {};
}

export default SearchForm;

