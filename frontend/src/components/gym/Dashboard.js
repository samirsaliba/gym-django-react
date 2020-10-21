import React, { Component } from 'react';

import ExamesList from './ExamesList';
import MatriculaPlanosList from './MatriculaPlanosList';
import MatriculaTurmasList from './MatriculaTurmasList';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <div id="accordion">
          <MatriculaPlanosList />
          <MatriculaTurmasList />
          <ExamesList />
        </div>
      </div>
    );
  }
}

export default Dashboard;