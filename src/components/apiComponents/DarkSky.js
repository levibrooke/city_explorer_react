import React, { Component } from 'react';
import superagent from 'superagent';

class DarkSky extends Component {



  render() {
    return (
      <section className="weather-container">
        <h3>Results from the {props.apiName}</h3>
        <p>Updated : {/* timestamp */}</p>
        <ul className={`${props.api}-results`}>
          
        </ul>
      </section>
    )
  }
}

export default DarkSky;
