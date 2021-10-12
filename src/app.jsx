import React, { Component } from 'react';
import Header from './header';
import Tagline from './tagline';
import Bootstrap_Panel from './bootstrap_panel';
import Outcome_Alerts from './outcome_alerts';
import Denomination_Grid from './denomination_grid';
import calculateChange from './helperFxs.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      due: 0,
      received: 0,
      changeObjects: [
        { currency: "twenties", label: "$20",value: 20, quantity: 0, show: false },
        { currency: "tens", label: "$10",value: 10, quantity: 0, show: false },
        { currency: "fives", label: "$5",value: 5, quantity: 0, show: false },
        { currency: "twos", label: "$2",value: 2, quantity: 0, show: false },
        { currency: "ones", label: "$1",value: 1, quantity: 0, show: false },
        { currency: "quarters", label: ".25 &#162;",value: 0.25, quantity: 0, show: false },
        { currency: "dimes", label: ".10 &#162;",value: 0.1, quantity: 0, show: false },
        { currency: "nickels", label: ".05 &#162;",value: 0.05, quantity: 0, show: false },
        { currency: "pennies", label: ".01 &#162;",value: 0.01, quantity: 0, show: false },
      ],
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClick =this.handleClick.bind(this);
  }

  handleInput(e){
    this.setState({
      [e.target.name]: parseFloat(e.target.value),
      }
    )
  }

  handleClick(stateObject){
    let deepCopyObj = JSON.parse(JSON.stringify(stateObject));
    calculateChange(deepCopyObj);
    this.setState(deepCopyObj);

  }

  render() {
    return (
    <div className="container mt-3">
      <Header />
      <Tagline />
      <div className="row">
        <div className="col-4">
          <div className="container rounded bg-light">
            <Bootstrap_Panel due={this.state.due} received={this.state.received} handleInput={this.handleInput} handleClick={() => this.handleClick(this.state)} />
          </div>
        </div>
        <div className="col-8">
          <div className="container rounded bg-light">
            <Outcome_Alerts due={this.state.due} received={this.state.received} />
            <Denomination_Grid />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
