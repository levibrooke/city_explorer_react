import React, { Component } from 'react';
import Search from './Search';
import Map from './Map';
import Result from './Result';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ''
    }
  }

  render() {
    return (
      <main>
        <Search />
        <Map />
        <h2>Here are the results for {this.state.searchQuery}</h2>
        {/* error container reminder comment */}
        <div className="column-container">
          <Result api={'weather'} apiName={'Dark Sky API'} />
          <Result api={'yelp'} apiName={'Yelp API'} />
          <Result api={'events'} apiName={'Eventbrite API'} />
          <Result api={'movies'} apiName={'Movie DB API'} />
          <Result api={'trails'} apiName={'Hiking Project API'} />
        </div>
      </main>
    )
  }
}

export default Main;
