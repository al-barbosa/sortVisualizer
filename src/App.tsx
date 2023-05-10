import React, { Component } from 'react';

import Bar from './components/Bar';


import './App.css';

class App extends Component {
  state: {
    array: number[];
    arraySteps: number[];
    colorKey: number[];
    currentStep: number;
    count: number;
    delay: number;
    algorithm: string;
    timeouts: any[];
}
 = {
    array: [],
    arraySteps:[],
    colorKey: [0],
    currentStep: 0,
    count: 20,
    delay: 100,
    algorithm: '',
    timeouts: [],
  }

  componentDidMount(): void {
    this.generateRandomArray();
  }

  generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  generateRandomArray = () => {
    const count = this.state.count;
    const temp = [];

    for (let i = 0; i < count; i++) {
      temp.push(this.generateRandomNumber(50, 200))
    }

    this.setState({
      array: temp,
      arraySteps: [temp],
    })
  }

  changeArray = (index: number, value: number) => {
    let arr = this.state.array;
    arr[index] = value;
    this.setState({
      array: arr,
      arraySteps: [arr],
      currentStep: 0,
    })
  }

  render() {
    let bars = this.state.array.map((value, index: number) => {
      return <Bar
        key={ index }
        index={ index }
        length={ value }
        color={ this.state.colorKey }
      />
    })
    return (
    <div className='app'>
      <div className='frame'>
        <div className='barsDiv container card'>{ bars }</div>
      </div>
      <div className="control-pannel"></div>
      <div className="pannel"></div>
    </div>
    )
  }

}

export default App;
