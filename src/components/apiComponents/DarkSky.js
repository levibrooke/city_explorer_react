import React from 'react';

const DarkSky = (props) => {

  return (
    <section className="weather-container">
      <h3>Results from the {props.apiName}</h3>

      {props.error && <p>There was an error fetching data.</p>}

      <p>Updated : {/* timestamp */}</p>
      <ul className={`${props.api}-results`}>
        
        {props.data.map((wx, id) => {
          return <li key={id}>{wx.forecast}</li>;
        })}

      </ul>
    </section>
  )
}

export default DarkSky;
