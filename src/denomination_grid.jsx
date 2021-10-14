import React from 'react'

export class Denomination_Grid extends React.Component{
  render(){
    const change = this.props.changeArray;
    let twenties = change[0];
    let tens = change[1];
    let fives = change[2];
    let ones = change[3];
    let quarters = change[4];
    let dimes = change[5];
    let nickels = change[6];
    let pennies = change[7];

    return (
      <div className="row container">
        <div className="col s6">
          <div className="row">
            <table class="centered">
              <tr>
                <td><p className="sarpanchFont counters">{twenties.quantity}</p></td>
                <td><div className=" teal lighten-2 dollarImg"></div></td>
                <td><p className="bebasFont counters">{twenties.label}</p></td>
              </tr>
            </table>
          </div>
          <div className="row">
            <div className="col">
              <div className="teal lighten-2" style={{width:'150px', height: '64px'}}>{tens.quantity}<i className="material-icons left">paid</i>{tens.label}</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="teal lighten-2" style={{width:'150px', height: '64px'}}>{fives.quantity}<i className="material-icons left">paid</i>{fives.label}</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="teal lighten-2" style={{width:'150px', height: '64px'}}>{ones.quantity}<i className="material-icons left">paid</i>{ones.label}</div>
            </div>
          </div>
        </div>
        <div className="col s6">
            <div className="container teal lighten-2" style={{width:'150px', height: '64px'}}>{quarters.quantity}<i className="material-icons left">paid</i>{quarters.label}</div>
            <div className="container teal lighten-2" style={{width:'150px', height: '64px'}}>{dimes.quantity}<i className="material-icons left">paid</i>{dimes.label}</div>
            <div className="container teal lighten-2" style={{width:'150px', height: '64px'}}>{nickels.quantity}<i className="material-icons left">paid</i>{nickels.label}</div>
            <div className="container teal lighten-2" style={{width:'150px', height: '64px'}}>{pennies.quantity}<i className="material-icons left">paid</i>{pennies.label}</div>
        </div>
      </div>
    )
  }
}

export default Denomination_Grid;

