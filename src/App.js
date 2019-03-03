import React, { Component } from 'react';
import './App.css';
import Inputs from './Inputs';
import InputTable from './InputTable';

class App extends Component {
  render() {
    return (
      <div className="App">
          
            <Inputs className='Inputs'/>
            <InputTable className='InputTable'/>

      </div>
    );
  }
}

export default App;
