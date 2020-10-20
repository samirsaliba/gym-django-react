
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlanos } from '../../actions/gym';

class PlanosList extends Component {
  componentDidMount() {
    this.props.getPlanos();
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Modalidade</th>
            <th scope="col">X por semana</th>
            <th scope="col">Pacote</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
        {this.props.planos.map(plano => (
          <tr key={plano.id}>
            <td>{plano.modalidade}</td>
            <td>{plano.vezes_por_semana}</td>
            <td>{plano.tipo}</td>
            <td>{plano.valor}</td>
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  planos: Object.values(state.planos)
});

export default connect(
  mapStateToProps,
  { getPlanos }
)(PlanosList);
