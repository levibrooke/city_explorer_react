import React, { Component, Fragment } from 'react';
import Result from './Result.js';

class SearchResults extends Component {

  render() {
    return (
      <Fragment>
        {/* error container reminder comment */}
        <div className="column-container">
          <Result api={'weather'} apiName={'Dark Sky API'} />
          <Result api={'yelp'} apiName={'Yelp API'} />
          <Result api={'events'} apiName={'Eventbrite API'} />
          <Result api={'movies'} apiName={'Movie DB API'} />
          <Result api={'trails'} apiName={'Hiking Project API'} />
        </div>
      </Fragment>
    )
  }
}

export default SearchResults;
