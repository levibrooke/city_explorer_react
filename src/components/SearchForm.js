import React, { Component } from 'react';
import superagent from 'superagent';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    }
  }

  handleLocationInput = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <form id="search-form">
        <label htmlFor="search">Search for a location</label>
        <input 
          type="text" 
          name="search" 
          id="input-search" 
          placeholder="Enter a location here" 
          onChange={this.updateInput}
          onSubmit={this.handleSubmit}
        />
        <button type="submit">Explore!</button>
      </form>
    )
  }
}

export default SearchForm;
