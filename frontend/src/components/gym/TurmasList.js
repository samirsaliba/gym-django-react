import { divide } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTurmas } from '../../actions/gym';

class TurmasList extends Component {
  componentDidMount() {
    this.props.getTurmas();
  }

  render() {
    return (
      <div className='d-flex justify-content-center'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope="col">Modalidade</th>
              <th scope="col">Dia</th>
              <th scope="col">Horario</th>
              <th scope="col">Vagas</th>
            </tr>
          </thead>
          <tbody>
            {this.props.turmas.map(turma => (
              <tr key={turma.id}>
                <td>{turma.modalidade}</td>
                <td>{turma.dia}</td>
                <td>{turma.horario}</td>
                <td>{turma.vagas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  turmas: Object.values(state.turmas)
});

export default connect(
  mapStateToProps,
  { getTurmas }
)(TurmasList);
