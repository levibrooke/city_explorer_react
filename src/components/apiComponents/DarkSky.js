import React, { Component } from 'react';
import superagent from 'superagent';

class DarkSky extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
      hasLocation: false
    }

    this.endpoint = `${process.env.REACT_APP_SERVER}`;
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.hasLocation !== this.props.hasLocation) {
      this.setState({ hasLocation: true, location: this.props.location });
    }

    this.fetchWeather(this.state.location);
  }

  fetchWeather = (data) => {
    console.log('data', data);
    superagent.get(`${this.endpoint}/weather`)
      .query({ data })
      .then(res => {
        console.log('res', res);
      })
      .catch(err => console.log('err', err));
  }

  render() {
    return (
      <section className="weather-container">
        <h3>Results from the {this.props.apiName}</h3>
        <p>Updated : {/* timestamp */}</p>
        <ul className={`${this.props.api}-results`}>
          
        </ul>
      </section>
    )
  }
}

export default DarkSky;
