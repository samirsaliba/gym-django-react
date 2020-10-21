import React, { Component } from 'react';
import ModalidadeList from './ModalidadeList';
import { Link } from 'react-router-dom';


class CommonDashboard extends Component {
  render() {
    return (
      <div>
        <div id="accordion">
          <ModalidadeList />
        </div>
      </div>
    );
  }
}

export default CommonDashboard;