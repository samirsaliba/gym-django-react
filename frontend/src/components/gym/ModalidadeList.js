
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getModalidades } from '../../actions/gym';

class ModalidadeList extends Component {
  componentDidMount() {
    this.props.getModalidades();
  }

  render() {
    return (
      this.props.modalidades.map(modalidade => (
        <div className="card mb-3" key={'modalidade'+modalidade.tipo}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="..." className="card-img" alt="..."></img>
                </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{modalidade.tipo}</h5>
                  <p className="card-text">{modalidade.descricao}</p>
                </div>
              </div>
            </div>
          </div>
        ))
    );
  }
}

const mapStateToProps = state => ({
            modalidades: Object.values(state.modalidades)
});

export default connect(
  mapStateToProps,
          { getModalidades}
)(ModalidadeList);