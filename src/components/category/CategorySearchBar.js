import React, { Component } from 'react';
import CategoryDropdown from './CategoryDropdown';
import CategorySuggestions from './CategorySuggestions';
import categories from '../../data/categories';

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
      <div>
        <form>
          <input
            placeholder="Enter keyword"
            onChange={this.handleInputChange}
            onClick={this.handleButtonClick}
            value={textInput}
          />
          <span>
            <button
              onClick={this.handleButtonClick}>
              in all categories..
            </button>
          </span>
        </form>

        { showDropdown && <CategoryDropdown /> }
        <CategorySuggestions/>
      </div>
    );
  }

   // nice new way to encapsulate all your prop defintions! DO I NEED THIS? I think it's only good for props received in a stateful comp.
  //  static defaultProps = {};
  //  static propTypes = {};
}

export default SearchForm;

