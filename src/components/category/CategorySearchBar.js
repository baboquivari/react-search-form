import React, { Component } from 'react';
import CategoryDropdown from './CategoryDropdown';
import categories from '../../data/categories';
import styled from 'styled-components'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

// rename
const SearchBar = styled.div`
  margin-left: 30px;
  width: 442px;
  display: flex;
  position: relative;
  `
const EnterKeywordSearchField = styled.div`
  display: flex;
  flex: 1 1 0;
  `
const Input = styled.input`
    flex-grow: 1;
    font-size: 15px;
    border: none;
    border-radius: 5px 0 0 5px;
    padding-left: 12px;
    /* width: 50%; */
    /* flex: 1 1 0; */
`
const InAllCategoriesButton = styled.div`
    flex: 1 1 0;
    background-color: white;
    border-radius: 0px 5px 5px 0;
    cursor: pointer;
    background-color: #EBEBEB;
`
const Text = styled.p`
  margin: 0;
  font-size: 15px;
  padding: 11px;
`

class SearchForm extends Component {
  state = {
    categories: categories,
    selectedCategories: [],
    textInput: '',
    showDropdown: false,
    conditionalText: "in all categories"
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

    this.setState(
      {
        selectedCategories:
          checked ?
          [...selectedCategories, category] :
          selectedCategories.filter(item => item !== category)
      },
      () => this.setConditionalText()
    )
  }

  setConditionalText = () => {
    const { selectedCategories } = this.state;
    console.log(selectedCategories);

    switch (selectedCategories) {
      case selectedCategories.length === 1:
        this.setState({ conditionalText: `in ${selectedCategories[0]}` });
        break;
      case selectedCategories.length > 1:
        this.setState({ conditionalText: "in multiple categories" });
        break;
      default:
        this.setState({ conditionalText: "in all categories" });
    }
  }

  render () {
    const {
      categories,
      selectedCategories,
      textInput,
      showDropdown,
      conditionalText
    } = this.state;

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
            <Text>{conditionalText}<Icon icon={faCaretDown} style={{marginLeft: "80px"}}/></Text>
        </InAllCategoriesButton>

        { showDropdown &&
          <CategoryDropdown
            categories={categories}
            handleCheckboxSelect={this.handleCheckboxSelect}
          /> }
      </SearchBar>
    );
  }

   // nice new way to encapsulate all your prop defintions! DO I NEED THIS? I think it's only good for props received in a stateful comp.
  //  static defaultProps = {};
  //  static propTypes = {};
}

export default SearchForm;

