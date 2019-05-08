import React from 'react';

export default (props) => (
  <section>
    <h3>Results from the {props.apiName}</h3>
    <p>Updated : {/* timestamp */}</p>
    <ul className={`${props.api}-results`}>
      <li>Some result here</li>
      <li>Some result here</li>
      <li>Some result here</li>
      <li>Some result here</li>
    </ul>
  </section>
)
