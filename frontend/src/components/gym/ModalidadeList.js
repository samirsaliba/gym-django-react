
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getModalidades } from '../../actions/gym';

class ModalidadeList extends Component {
  componentDidMount() {
    this.props.getModalidades();
  }

  render() {
    return (
      this.props.modalidades.map(mod => (
        <div className="card mb-3" key={'modalidade'+mod.tipo}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={mod.imagem} className="card-img" alt="..." height="100% "></img>
                </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{mod.tipo}</h5>
                  <p className="card-text">{mod.descricao}</p>
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