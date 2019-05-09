import React, { Component, Fragment } from 'react';
import Header from './Header.js';
import SearchForm from './SearchForm.js';
import Map from './Map.js';
import SearchResults from './SearchResults.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
      hasLocation: false
    }
  }

  handleLocation = (location) => {
    this.setState({ location, hasLocation: true });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <SearchForm
            saveLocation={this.handleLocation}
          />
          {this.state.hasLocation && <Map 
            lat={this.state.location.latitude}
            long={this.state.location.longitude}
          />}
          <SearchResults />
        </main>
      </Fragment>
    )
  }
}

export default App;
