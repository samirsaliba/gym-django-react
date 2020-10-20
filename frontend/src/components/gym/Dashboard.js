import React, { Component } from 'react';
import ModalidadeList from './ModalidadeList';
import ExamesList from './ExamesList';
import MatriculaPlanosList from './MatriculaPlanosList';
import MatriculaTurmasList from './MatriculaTurmasList';
import PlanosList from './PlanosList';

import ModalidadeCreate from './ModalidadeCreate'; // added

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <ModalidadeList />
        <PlanosList />

        <MatriculaPlanosList />
        <MatriculaTurmasList />
        <ExamesList />
        

        {/* <div>Modalidade Create Form</div>
        <ModalidadeCreate />  */}
      </div>
    );
  }
}

export default Dashboard;