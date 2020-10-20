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
      <div>
        <ModalidadeList />
        <PlanosList />

        <ExamesList />
        <MatriculaPlanosList />
        <MatriculaTurmasList />
       
        {/* <div>Modalidade Create Form</div>
        <ModalidadeCreate />  */}
      </div>
    );
  }
}

export default Dashboard;