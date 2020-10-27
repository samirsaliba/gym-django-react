
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMatriculaPlanos } from '../../actions/gym';

class MatriculaPlanosList extends Component {
  componentDidMount() {
    this.props.getMatriculaPlanos();
  }

  render() {
    return (
      <div className="card">
        <div className="card-header" id="headingTwo">
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <h6 className="mb-0">Meus Planos</h6>
            </button>
            <span className="badge badge-primary badge-pill">{this.props.matricula_planos.length}</span>
          
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div className="card-body">
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope="col">Modalidade</th>
                  <th scope="col">X por semana</th>
                  <th scope="col">Pacote</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody>
                {this.props.matricula_planos.map(obj => (
                  <tr key={'plano'+obj.id}>
                    <td>{obj.plano__modalidade__tipo}</td>
                    <td>{obj.plano__vezes_por_semana}</td>
                    <td>{obj.plano__tipo}</td>
                    <td>{obj.plano__valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  matricula_planos: Object.values(state.matricula_planos)
});

export default connect(
  mapStateToProps,
  { getMatriculaPlanos }
)(MatriculaPlanosList);
