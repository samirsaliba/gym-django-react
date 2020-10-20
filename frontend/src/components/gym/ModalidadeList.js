
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getModalidades } from '../../actions/gym';

class ModalidadeList extends Component {
  componentDidMount() {
    this.props.getModalidades();
  }

  render() {
    return (
      <ul className="list-group list-group-horizontal">
        {this.props.modalidades.map(modalidade => (
            <li className="list-group-item" key={modalidade.tipo}>{modalidade.tipo}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  modalidades: Object.values(state.modalidades)
});

export default connect(
  mapStateToProps,
  { getModalidades }
)(ModalidadeList);