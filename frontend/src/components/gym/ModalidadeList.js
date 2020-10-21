
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
        <div className="card mb-3" key={modalidade.tipo}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="..." className="card-img" alt="..."></img>
                </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{modalidade.tipo}</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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