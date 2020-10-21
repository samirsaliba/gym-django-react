import React, { Component } from 'react';
import ModalidadeList from './ModalidadeList';
import { Link } from 'react-router-dom';


class CommonDashboard extends Component {
  render() {
    return (
      <div>
          <ModalidadeList />
      </div>
    );
  }
}

export default CommonDashboard;