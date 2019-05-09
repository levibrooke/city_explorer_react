import React, { Component, Fragment } from 'react';
import Header from './Header.js';
import SearchForm from './SearchForm.js';
import Map from './Map.js';
import SearchResults from './SearchResults.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <SearchForm />
          <Map />
          <SearchResults />
        </main>
      </Fragment>
    )
  }
}

export default App;
