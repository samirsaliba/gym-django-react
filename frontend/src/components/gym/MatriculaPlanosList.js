
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
          <ul className="list-group" key={plano.id}>
            <li className="list-group-item" >{plano.modalidade}</li>
            <li className="list-group-item">{plano.vezes_por_semana}</li>
            <li className="list-group-item">{plano.tipo}</li>
            <li className="list-group-item" >{plano.valor}</li>
            </ul>
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
