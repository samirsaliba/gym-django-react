
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExames } from '../../actions/gym';

class ExameList extends Component {
  componentDidMount() {
    this.props.getExames();
  }

  render() {
    return (
      <div>
        {this.props.exames.map(exame => (
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Meus Exames
                </button>
              </h5>
            </div>

            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div class="card-body">

                <ul className="list-group" key={exame.id}>
                  <li className="list-group-item">{exame.massa}</li>
                  <li className="list-group-item">{exame.altura}</li>
                  <li className="list-group-item">{exame.pressao_sistolica}</li>
                  <li className="list-group-item">{exame.pressao_diastolica}</li>
                  <li className="list-group-item">{exame.percentual_gordura}</li>
                  <li className="list-group-item">{exame.percentual_massa_magra}</li>
                  <li className="list-group-item">{exame.imc}</li>
                </ul>
              </div>
            </div>
          </div>
        ))
        }</div>
    );
  }
}

const mapStateToProps = state => ({
  exames: Object.values(state.exames)
});

export default connect(
  mapStateToProps,
  { getExames }
)(ExameList);
