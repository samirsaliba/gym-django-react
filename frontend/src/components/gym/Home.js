import React, { Component } from 'react';
import ModalidadesList from './ModalidadesList';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
          <ModalidadesList />
      </div>
    );
  }
}

export default Home;