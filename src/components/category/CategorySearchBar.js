import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Suggestions from './Suggestions';
import categories from '../../data/categories';

class SearchForm extends Component {
  state = {
    categories: categories,
    textInput: '',
    showDropdown: false
  }

  onTextInput = event => {
    event.persist();
    this.setState((state, props) => ({ textInput: event.target.value }));
  }

  onButtonClick = event => {
    event.preventDefault();
    const { showDropdown } = this.state;
    const { type: elementType } = event.target;

    this.setState((state, props) => ({
      showDropdown: elementType === 'text' && !showDropdown ? showDropdown : !showDropdown
    }));
  }

  render () {
    const { categories, textInput, showDropdown } = this.state;

    return (
      <div>
        <form>
          <input
            placeholder="Enter keyword"
            onChange={this.onTextInput}
            onClick={this.onButtonClick}
            value={textInput}
          />
          <span>
            <button
              onClick={this.onButtonClick}>
              in all categories..
            </button>
          </span>
        </form>

        { showDropdown && <Dropdown /> }
        <Suggestions/>
      </div>
    );
  }

   // nice new way to encapsulate all your prop defintions! DO I NEED THIS? I think it's only good for props received in a stateful comp.
  //  static defaultProps = {};
  //  static propTypes = {};
}

export default SearchForm;
