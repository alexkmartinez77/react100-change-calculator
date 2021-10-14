import React from 'react';

export class Outcome_Alerts extends React.Component{

  render(){
    let paid = this.props.received;
    let due = this.props.due;
    let change = (paid - due).toFixed(2);
    let alert; 

    switch (true) {
      case  paid < due:
            alert = <div className="noMargin counterHeaders bebasFont"> You are ${(due - paid).toFixed(2)} short.</div>;
            break;
      case  change > 0:
            alert = <div className="noMargin counterHeaders bebasFont"> The total change due is {change}.</div>;
            break;
      default:
            alert = <div className="noMargin counterHeaders bebasFont"> Enter a sale and tendered amount above to calculate your change.</div>;
            break;
  }

    return (
      <div className="row">
        <div className="col s12">
          <div className="center-align">
            {alert}
          </div>
        </div>
      </div>
    )
  }
}

export default Outcome_Alerts;

