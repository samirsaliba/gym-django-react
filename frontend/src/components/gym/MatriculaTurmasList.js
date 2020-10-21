
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
            <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                Minhas Turmas
              </button>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
              <ul className="list-group" >
                {this.props.matricula_turmas.map(obj => (
                <div key={'turma' + obj.id}>
                  <li className="list-group-item" >{obj.turma__modalidade__tipo}</li>
                  <li className="list-group-item">{obj.turma__dia}</li>
                  <li className="list-group-item">{obj.turma__horario}</li>
                  </div>  
                ))}
              </ul>
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