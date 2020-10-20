
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMatriculaPlanos } from '../../actions/gym';

class MatriculaPlanosList extends Component {
  componentDidMount() {
    this.props.getMatriculaPlanos();
  }

  render() {
    return (
      <ul className="list-group list-group-horizontal">
        {this.props.matricula_planos.map(matricula_plano => (
            <li className="list-group-item" key={matricula_plano.id}>{matricula_plano.tipo}</li>
        ))}
      </ul>
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