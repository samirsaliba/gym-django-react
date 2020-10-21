
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
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  Minhas Turmas
              </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div class="card-body">
                <ul className="list-group" key={turma.id}>
                  <li className="list-group-item" >{turma.modalidade}</li>
                  <li className="list-group-item">{turma.dia}</li>
                  <li className="list-group-item">{turma.horario}</li>
                </ul>
              </div>
            </div>
          </div>
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