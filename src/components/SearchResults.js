import React, { Component, Fragment } from 'react';

import DarkSky from './apiComponents/DarkSky.js';
import Eventbrite from './apiComponents/Eventbrite.js';
import Hiking from './apiComponents/Hiking.js';
import MovieDB from './apiComponents/MovieDB.js';
import Yelp from './apiComponents/Yelp.js';

class SearchResults extends Component {

  render() {
    return (
      <Fragment>
        {/* error container reminder comment */}
        <div className="column-container">
          <DarkSky 
            hasLocation={this.props.hasLocation}
            location={this.props.location} 
          />
          <Yelp 
            hasLocation={this.props.hasLocation}
            location={this.props.location}
          />
          <Eventbrite
            hasLocation={this.props.hasLocation}
            location={this.props.location}
          />
          <MovieDB 
            hasLocation={this.props.hasLocation}
            location={this.props.location}
          />
          <Hiking 
            hasLocation={this.props.hasLocation}
            location={this.props.location}
          />
        </div>
      </Fragment>
    )
  }
}

export default SearchResults;
