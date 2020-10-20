
import { divide } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExames } from '../../actions/gym';

class ExameList extends Component {
  componentDidMount() {
    this.props.getExames();
  }

  render() {
    return (
        this.props.exames.map(exame => (
            <ul className="list-group" key={exame.id}>
                <li className="list-group-item">{exame.massa}</li>
                <li className="list-group-item">{exame.altura}</li>
                <li className="list-group-item">{exame.pressao_sistolica}</li>
                <li className="list-group-item">{exame.pressao_diastolica}</li>
                <li className="list-group-item">{exame.percentual_gordura}</li>
                <li className="list-group-item">{exame.percentual_massa_magra}</li>
                <li className="list-group-item">{exame.habilitado}</li>
            </ul>
     )));
    }
  }

const mapStateToProps = state => ({
  exames: Object.values(state.exames)
});

export default connect(
  mapStateToProps,
  { getExames }
)(ExameList);
