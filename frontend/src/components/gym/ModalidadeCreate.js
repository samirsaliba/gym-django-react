import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addModalidade } from '../../actions/gym';
import ModalidadeForm from './ModalidadeForm';

class ModalidadeCreate extends Component {
  onSubmit = formValues => {
    this.props.addModalidade(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <ModalidadeForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addModalidade }
)(ModalidadeCreate);