import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div>
      <Header />
      <Tagline />
      <div class="row">
        <div class="col-4">
          <Bootstrap_Panel />
        </div>
        <div class="col-8">
          <Outcome_Alerts />
          <Denomination_Grid />
        </div>
      </div>
    </div>
  }
}

export default App;
