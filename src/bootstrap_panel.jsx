import React from 'react';

export class Bootstrap_Panel extends React.Component{

  render(){
    return (
      <div>
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
      </div>
    )
  }
}

export default Bootstrap_Panel;

