import React from 'react';

const Map = (props) => {

  let mapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=${props.lat}%2c%20${props.long}&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyA_1nx9epZie0de_8QOXTOVtdrikAs7Ye0`;

  return (
    <img id="map" src={`${mapSrc}`} alt="Map of search query" />
  )
};

export default Map;
