import React from 'react';

export default (props) => (
  <section className="hiking-container">
    <h3>Results from the Hiking Project API</h3>

    {props.error && <p>There was an error fetching data.</p>}

    <p>Updated : {/* timestamp */}</p>
    <ul className={"trails-results"}>
      
      {props.data.map((trail, id) => {
        return (
          <li key={id}>
            <p>Hike Name: <a href={trail.trail_url} target="_blank" rel="noopener noreferrer">{trail.name}</a>, Location: {trail.location}, Distance: {trail.length} miles</p>
            <p>On {trail.condition_date} at {trail.condition_time}, trail conditions were reported as: {trail.conditions}</p>
            <p>This trail has a rating of {trail.stars} stars (out of {trail.star_votes} votes)</p>
            <p>{trail.summary}</p>
          </li>
        )
      })}

    </ul>
  </section>
)
