import React, { Component } from 'react';
import ModalidadeList from './ModalidadeList';
import PlanosList from './PlanosList';
import ModalidadeCreate from './ModalidadeCreate'; // added

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <ModalidadeList />
        <PlanosList />
        {/* <div>Modalidade Create Form</div>
        <ModalidadeCreate />  */}
      </div>
    );
  }
}

export default Dashboard;