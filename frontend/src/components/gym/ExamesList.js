
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

// cliente = models.ForeignKey(Cliente, related_name="exames", on_delete=models.CASCADE)
// massa = models.DecimalField(max_digits=5, decimal_places=2)
// altura = models.DecimalField(max_digits=3, decimal_places=2)
// pressao_sistolica = models.PositiveSmallIntegerField(validators=[MinValueValidator(0),MaxValueValidator(200)])
// pressao_diastolica = models.PositiveSmallIntegerField(validators=[MinValueValidator(0),MaxValueValidator(200)])
// percentual_gordura = models.DecimalField(max_digits=4, decimal_places=2)
// percentual_massa_magra = models.DecimalField(max_digits=4, decimal_places=2)
// imc = models.DecimalField(max_digits=3, decimal_places=1)
// habilitado = models.BooleanField()