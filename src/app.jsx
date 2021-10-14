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
        { currency: "twenty", label: "$20",value: 20, quantity: 0, show: false, type: 'note' },
        { currency: "ten", label: "$10",value: 10, quantity: 0, show: false, type: 'note' },
        { currency: "five", label: "$5",value: 5, quantity: 0, show: false, type: 'note' },
        { currency: "one", label: "$1",value: 1, quantity: 0, show: false, type: 'note' },
        { currency: "quarter", label: "$.25",value: 0.25, quantity: 0, show: false, type: 'coin' },
        { currency: "dime", label: "$.10",value: 0.1, quantity: 0, show: false, type: 'coin' },
        { currency: "nickel", label: "$.05",value: 0.05, quantity: 0, show: false, type: 'coin' },
        { currency: "penny", label: "$.01",value: 0.01, quantity: 0, show: false, type: 'coin' },
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
    <div className="container center orange lighten-5 z-depth-2">
      <Header />
      <Tagline />
      <div className="row">
        <div className="col">
            <Bootstrap_Panel due={this.state.due} received={this.state.received} handleInput={this.handleInput} handleClick={() => this.handleClick(this.state)} />
        </div>
      </div>
      <Outcome_Alerts due={this.state.due} received={this.state.received} />
      <Denomination_Grid changeArray={this.state.changeObjects}/>
    </div>

    )
  }
}

export default App;
