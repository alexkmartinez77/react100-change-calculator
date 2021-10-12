import React, { Component } from 'react';
import Header from './header';
import Tagline from './tagline';
import Bootstrap_Panel from './bootstrap_panel';
import Outcome_Alerts from './outcome_alerts';
import Denomination_Grid from './denomination_grid';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="container mt-3">
      <Header />
      <Tagline />
      <div className="row">
        <div className="col-4">
          <Bootstrap_Panel />
        </div>
        <div className="col-8">
          <Outcome_Alerts />
          <Denomination_Grid />
        </div>
      </div>
    </div>
    )
  }
}

export default App;
