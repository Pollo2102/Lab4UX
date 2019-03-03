import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class1Name: '',
            class1Grade: '',
            class2Name: '',
            class2Grade: '',
            class3Name: '',
            class3Grade: '',
        }
    }

    handleChange = (stateName, event) => {
        this.setState({[stateName]: event.target.value});
    };

    render() {
      return (
        <div style={{marginLeft: 100}} className="Inputs" align='left'>
          <TextField 
          placeholder='Nombre de la Clase' 
          value={this.state.class1Name}
          onChange={this.handleChange.bind(this, 'class1Name')}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
          <TextField 
          placeholder='Nota Parcial 1'
          value={this.state.class1Grade}
          onChange={this.handleChange.bind(this, 'class1Grade')}/><br></br>

          <TextField 
          placeholder='Nombre de la Clase' 
          onChange={this.handleChange.bind(this, 'class2Name')}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <TextField placeholder='Nota Parcial 1' onChange={this.handleChange.bind(this, 'class2Grade')}/><br></br>

          <TextField placeholder='Nombre de la Clase' onChange={this.handleChange.bind(this, 'class3Name')}>Nombre de Clase</TextField>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <TextField placeholder='Nota Parcial 1' onChange={this.handleChange.bind(this, 'class3Grade')}>Nota Parcial 1</TextField><br></br>

          <Button 
          variant='contained' 
          color='contained on'>Continuar</Button>
        </div>
      );
    }
  }

    Inputs.inputProps = {
      class1Name: PropTypes.string,
      class1Grade: PropTypes.number,
      class2Name: PropTypes.string,
      class2Grade: PropTypes.number,
      class3Name: PropTypes.string,
      class3Grade: PropTypes.number
  };

  export default Inputs;