import React from 'react';

export class Bootstrap_Panel extends React.Component{

  render(){
    return (
      
      <div>{/*
         <div className="row">
            <div className="col m-2">
              Enter Information
            </div>
         </div>
         <div className="row bg-white">
            <div className="col">
              <div className="row">
                <div className="col">
                  <label className="font-weight-bold">How much is due?</label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input className="form-control" name="due" type="number" defaultValue="this.props.due" onChange={(e) => this.props.handleInput(e)}></input>                  
                </div>
              </div>
              <div className="row">
                <div className="col">
                <label className="font-weight-bold">How much was received?</label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input className="form-control" name="received" type="number" defaultValue="this.props.received" onChange={(e) => this.props.handleInput(e)}></input>
                </div>
              </div>
            </div>
         </div>
         <div className="row  text center">
            <div className="col m-2">
              <button className="btn-primary" onClick={() => this.props.handleClick()}>Calculate</button>
            </div>
         </div> 
      </div>*/}
     
      <div className="row rowModifier1">
      {/*<form className="col s12" onsubmit="submitFunction(); return false;">*/}
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
{/*</form>*/}
    </div>
    </div>

    )
  }
}

export default Bootstrap_Panel;

