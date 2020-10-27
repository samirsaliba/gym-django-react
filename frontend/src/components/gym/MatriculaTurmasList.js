
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
        <div className="card">
          <div className="card-header" id="headingThree">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <h6 className="mb-0">Minhas Turmas</h6>
              </button>
              <span className="badge badge-primary badge-pill">{this.props.matricula_turmas.length}</span>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope="col">Modalidade</th>
                    <th scope="col">Dia</th>
                    <th scope="col">Horário</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.matricula_turmas.map(obj => (
                    <tr key={'plano'+obj.id}>
                      <td>{obj.turma__modalidade__tipo}</td>
                      <td>{obj.turma__dia}</td>
                      <td>{obj.turma__horario}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
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