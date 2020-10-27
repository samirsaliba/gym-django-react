
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExames } from '../../actions/gym';

class ExameList extends Component {
  componentDidMount() {
    this.props.getExames();
  }

  render() {
    return (
      <div className="card">
        <div className="card-header " id="headingOne">
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h6 className="mb-0">Meus Exames</h6>
            </button>
            <span className="badge badge-primary badge-pill ">{this.props.exames.length}</span>          
        </div>

        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope="col">Massa</th>
                    <th scope="col">Altura</th>
                    <th scope="col">Pressão Sistólica</th>
                    <th scope="col">Pressão Diastólica</th>
                    <th scope="col">% Gordura</th>
                    <th scope="col">% Massa Magra</th>
                    <th scope="col">IMC</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.exames.map(exame => (
                    <tr key={'plano'+exame.id}>
                      <td>{exame.massa}</td>
                      <td>{exame.altura}</td>
                      <td>{exame.pressao_sistolica}</td>
                      <td>{exame.pressao_diastolica}</td>
                      <td>{exame.percentual_gordura}</td>
                      <td>{exame.percentual_massa_magra}</td>
                      <td>{exame.imc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>
      </div>
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
