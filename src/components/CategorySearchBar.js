import React, { Component } from 'react';
import CategoryDropdown from './CategoryDropdown';
import categories from '../data/categories';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

// CSS
import {
  SearchBar,
  EnterKeywordSearchField,
  InAllCategoriesButton,
  Input,
  ButtonText
} from '../css/category';


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
      showDropdown: elementType === "text" ? showDropdown : !showDropdown
    });
  }

  handleCheckboxSelect = (category, event) => {
    const { selectedCategories } = this.state;
    const { checked } = event.target;

    const addOrRemoveCategory = () => {
      return checked ?
      selectedCategories.concat(category) :
      selectedCategories.filter(item => item !== category)
    }

    this.setState({ selectedCategories: addOrRemoveCategory() })
  }

  handleMouseLeave = () => this.setState({ showDropdown: false, selectedCategories: [] })

  render () {
    const {
      state: {
        categories,
        selectedCategories,
        textInput,
        showDropdown,
        conditionalText
      },
      handleMouseLeave,
      handleInputChange,
      handleButtonClick,
      handleCheckboxSelect
    } = this;

    return (
      <SearchBar onMouseLeave={handleMouseLeave}>
        <EnterKeywordSearchField>
          <Input
            placeholder="Enter keyword"
            onChange={handleInputChange}
            onClick={handleButtonClick}
            value={textInput}>
          </Input>
        </EnterKeywordSearchField>

        <InAllCategoriesButton onClick={handleButtonClick}>
            <ButtonText>
              {"in all categories"}
              <Icon icon={faCaretDown} style={{marginLeft: "80px"}}/>
            </ButtonText>
        </InAllCategoriesButton>

        { showDropdown &&
          <CategoryDropdown
            categories={categories}
            handleCheckboxSelect={handleCheckboxSelect}
            handleButtonClick={handleButtonClick}
          /> }
      </SearchBar>
    );
  }
}

export default SearchForm;

