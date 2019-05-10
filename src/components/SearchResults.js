import React, { Component, Fragment } from 'react';
import superagent from 'superagent';

import DarkSky from './apiComponents/DarkSky.js';
import Hiking from './apiComponents/Hiking.js';
import MovieDB from './apiComponents/MovieDB.js';
import Yelp from './apiComponents/Yelp.js';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasResult: false,
      result: [],
      hasError: false
    }

    this.server = `${process.env.REACT_APP_SERVER}`;
  }

  components = {
    weather: DarkSky,
    yelp: Yelp,
    movies: MovieDB,
    trails: Hiking
  }
  
  componentDidUpdate = (prevProps) => {
    if (prevProps.location.id !== this.props.location.id) {
      this.fetchWeather(this.props.location, this.props.apiName);
    }
  }

  fetchWeather = async (data, endpoint) => {
    await superagent.get(`${this.server}/${endpoint}`)
      .query({ data })
      .then(res => {
        this.setState({ hasResult: true, result: res.body });
      })
      .catch(err => {
        console.log('err', err)
        this.setState({ hasError: true });
      });
  }

  render() {
    const ApiComponent = this.components[this.props.apiName];

    return (
      <Fragment>
        {(this.state.hasResult || this.state.hasError) && 
          <ApiComponent
            data={this.state.result} 
            error={this.state.hasError} 
          />
        }
      </Fragment>
    )
  }
}

export default SearchResults;
