import React from 'react'

export class Outcome_Alerts extends React.Component{

  render(){
    let paid = this.props.received;
    let due = this.props.due;
    let change = paid - due;
    let alert; 

    switch (true) {
      case  paid < due:
            alert = <div> You are ${(due - paid)} short.</div>;
            break;
      case  change > 0:
            alert = <div> The total change due is {change}.</div>;
            break;
      default:
            alert = <div> Enter a valid received and due amounts to calculate your change.</div>;
            break;
  }

    return (
      <div className="container rounded bg-success">
        <div className="row">
          <div className="col">
            {alert}
          </div>
        </div>
      </div>
    )
  }
}
export default Outcome_Alerts;

