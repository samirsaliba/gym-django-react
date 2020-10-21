
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMatriculaPlanos } from '../../actions/gym';

class MatriculaPlanosList extends Component {
  componentDidMount() {
    this.props.getMatriculaPlanos();
  }

  render() {
    return (
      <div>
        {this.props.matricula_planos.map(plano => (
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  Meus Planos
                </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="card-body">
                <ul className="list-group" key={plano.id}>
                  <li className="list-group-item" >{plano.modalidade}</li>
                  <li className="list-group-item">{plano.vezes_por_semana}</li>
                  <li className="list-group-item">{plano.tipo}</li>
                  <li className="list-group-item" >{plano.valor}</li>
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
  matricula_planos: Object.values(state.matricula_planos)
});

export default connect(
  mapStateToProps,
  { getMatriculaPlanos }
)(MatriculaPlanosList);
