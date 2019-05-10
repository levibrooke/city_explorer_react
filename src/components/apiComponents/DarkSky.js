import React from 'react';

export default (props) => (
  <section className="weather-container">
    <h3>Results from the Dark Sky API</h3>

    {props.error && <p>There was an error fetching data.</p>}

    <p>Updated : {/* timestamp */}</p>
    <ul className={"weather-results"}>
      
      {props.data.map((wx, id) => {
        return <li key={id}>{wx.forecast}</li>;
      })}

    </ul>
  </section>
)
