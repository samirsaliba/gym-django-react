
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMatriculaTurmas } from '../../actions/gym';

class MatriculaTurmasList extends Component {
  componentDidMount() {
    this.props.getMatriculaTurmas();
  }

  render() {
    return (
      <ul className="list-group list-group-horizontal">
        {this.props.matricula_turmas.map(matricula_turma => (
            <li className="list-group-item" key={matricula_turma.id}>{matricula_turma.tipo}</li>
        ))}
      </ul>
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