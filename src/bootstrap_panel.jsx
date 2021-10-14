import React from 'react';

export class Bootstrap_Panel extends React.Component{

  render(){
    return (        
      <div className="row rowModifier1">
        <div className="row rowModifier1 valign-wrapper">
          <div className="col s1 right-align dollarSignPadding">
            <p className="dollarSignMargin bebasFont inputText">$</p>
          </div>
          <div className="input-field col s5">
            <input name="due" defaultValue={this.props.due}  onChange={(e) => this.props.handleInput(e)} id="amount-due" type="number" required step=".01" min=".00" className="validate bebasFont inputText"></input>
            <label htmlFor="amount-due" className="bebasFont counters">Sale Amount</label>
            <span className="helper-text" id="helperSaleAmount"></span>
          </div>
          <div className="col s1 right-align dollarSignPadding">
            <p className="dollarSignMargin bebasFont inputText">$</p>
          </div>
          <div className="input-field col s5">
            <input name="received" defaultValue={this.props.received} onChange={(e) => this.props.handleInput(e)} id="amount-received" type="number" required step=".01" min=".00" className="validate bebasFont inputText"></input>
            <label htmlFor="amount-received" className="bebasFont counters">Amount Tendered</label>
            <span className="helper-text" id="helperAmountTendered"></span>
          </div>
        </div>
        <div className="row">
          <button onClick={() => this.props.handleClick()} className="btn waves-effect waves-light black" id="calculate-change" name="action">Caculate
            <i className="material-icons right">send</i>
          </button>
        </div>    
    </div>
    )
  }
}

export default Bootstrap_Panel;

