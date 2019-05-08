import React, { Component } from 'react';
import Search from './Search';
import Map from './Map';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Search />
        <Map />
      </main>
    )
  }
}

export default Main;
