import React from 'react';

export default (props) => (
  <section className="movie-container">
    <h3>Results from the Movie DB API</h3>

    {props.error && <p>There was an error fetching data.</p>}

    <p>Updated : {/* timestamp */}</p>
    <ul className={"movie-results"}>
      
      {props.data.map((movie, id) => {
        let fixedImageUrl = movie.image_url.split('_and_h300_bestv2').join('');

        return (
          <li key={id}>
            <p><span>{movie.title}</span> was relased on {movie.released_on}. Out of {movie.total_votes} total votes, {movie.title} has an average vote of {movie.average_votes} and a popularity score of {movie.popularity}.</p>
            <img src={fixedImageUrl} />
            <p>{movie.overview}</p>
          </li>
        )
      })}

    </ul>
  </section>
)
