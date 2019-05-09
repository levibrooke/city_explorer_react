import React from 'react';

export default (props) => (
  <section className="yelp-container">
    <h3>Results from the {props.apiName}</h3>
    <p>Updated : {/* timestamp */}</p>
    <ul className={`${props.api}-results`}>
      
    </ul>
  </section>
)
