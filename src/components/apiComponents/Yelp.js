import React from 'react';

export default (props) => (
  <section className="yelp-container">
    <h3>Results from the Yelp API</h3>

    {props.error && <p>There was an error fetching data.</p>}

    <p>Updated : {/* timestamp */}</p>
    <ul className={"yelp-results"}>
      
    {props.data.map((restaurant, id) => {
      return (
        <li key={id}>
          <a href={restaurant.url} target="_blank" rel="noopener noreferrer">{restaurant.name}</a>
          <p>The average rating is {restaurant.rating} out of 5 and the average cost is {restaurant.price} out of 4</p>
          <img src={restaurant.image_url} />
        </li>
      )
    })}

    </ul>
  </section>
)
