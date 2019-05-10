import React, { Component } from 'react';
import superagent from 'superagent';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    }
    this.endpoint = `${process.env.REACT_APP_SERVER}`;
  }

  handleLocationInput = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    superagent.get(`${this.endpoint}/location`)
      .query({ data: this.state.searchQuery})
      .then(res => {
        this.props.saveLocation(res.body);
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  render() {
    return (
      <form id="search-form" onSubmit={this.handleSubmit}>
        <label htmlFor="search">Search for a location</label>
        <input 
          type="text" 
          name="search" 
          id="input-search" 
          placeholder="Enter a location here" 
          onChange={this.handleLocationInput}
        />
        <button type="submit">Explore!</button>
      </form>
    )
  }
}

export default SearchForm;
