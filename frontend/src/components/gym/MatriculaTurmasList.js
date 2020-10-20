
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMatriculaTurmas } from '../../actions/gym';

class MatriculaTurmasList extends Component {
  componentDidMount() {
    this.props.getMatriculaTurmas();
  }

  render() {
    return (
      <div>
        {this.props.matricula_turmas.map(turma => (
          <ul className="list-group" key={turma.id}>
            <li className="list-group-item" >{turma.modalidade}</li>
            <li className="list-group-item">{turma.dia}</li>
            <li className="list-group-item">{turma.horario}</li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  matricula_turmas: Object.values(state.matricula_turmas)
});

export default connect(
  mapStateToProps,
  { getMatriculaTurmas }
)(MatriculaTurmasList);