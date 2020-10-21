
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
          <h5 className="mb-0">
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              Meus Planos
                </button>
          </h5>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div className="card-body">
            {this.props.matricula_planos.map(obj => (
              <ul className="list-group" key={'plano'+obj.id}>
                <li className="list-group-item" >{obj.plano__modalidade__tipo}</li>
                <li className="list-group-item">{obj.plano__vezes_por_semana}</li>
                <li className="list-group-item">{obj.plano__tipo}</li>
                <li className="list-group-item" >{obj.plano__valor}</li>
              </ul>
            ))}
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
