import React, { Component } from 'react';
import './App.css';
import CircleContainer from './components/CircleContainer/CircleContainer';
import Buttons from './components/Buttons/Buttons';

const buttons = ['B1', 'B2', 'B3', 'B4'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selBtnIdx: 0
    }
  }

  handleBtnSelection = (btnIdx) => {
    this.setState({selBtnIdx: btnIdx})
  }

  render() {
    return (
      <div>
        <Buttons 
          buttons={buttons}
          handleBtnSelection={this.handleBtnSelection}
        />
        <CircleContainer 
          currentBtn={this.state.selBtnIdx}
        />
      </div>
    );
  }
}

export default App;
