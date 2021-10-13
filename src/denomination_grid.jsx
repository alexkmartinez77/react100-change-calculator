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
      <div className="container rounded bg-light">
        <div className="row">
            <span className="container rounded bg-info border" style={{width:'100px', height: '100px'}}>{twenties.label} {twenties.quantity}</span>
            <span className="container rounded bg-info border" style={{width:'100px', height: '100px'}}>{tens.label} {tens.quantity}</span>
            <span className="container rounded bg-info border" style={{width:'100px', height: '100px'}}>{fives.label} {fives.quantity}</span>
            <span className="container rounded bg-info border" style={{width:'100px', height: '100px'}}>{ones.label} {ones.quantity}</span>
        </div>
        <div className="row">
            <span className="container rounded bg-info border" style={{width:'100px', height: '100px'}}>{quarters.label} {quarters.quantity}</span>
            <span className="container rounded bg-info border" style={{width:'100px', height: '100px'}}>{dimes.label} {dimes.quantity}</span>
            <span className="container rounded bg-info border" style={{width:'100px', height: '100px'}}>{nickels.label} {nickels.quantity}</span>
            <span className="container rounded bg-info border" style={{width:'100px', height: '100px'}}>{pennies.label} {pennies.quantity}</span>
        </div>
      </div>
    )
  }
}

export default Denomination_Grid;

