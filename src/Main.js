import React, { Component } from 'react';
import Search from './Search';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Search />
      </main>
    )
  }
}

export default Main;
