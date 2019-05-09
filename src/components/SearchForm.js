import React, { Component } from 'react';

class SearchForm extends Component {

  render() {
    return (
      <form id="search-form">
        <label htmlFor="search">Search for a location</label>
        <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
        <button type="submit">Explore!</button>
      </form>
    )
  }
}

export default SearchForm;
