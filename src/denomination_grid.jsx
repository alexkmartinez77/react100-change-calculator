import React from 'react'
import Denomination_Row from './denomination_row';

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
          <Denomination_Row label={twenties.label} quantity={twenties.quantity} show={twenties.show} currency={twenties.currency} type={twenties.type}/>
          <Denomination_Row label={tens.label} quantity={tens.quantity} show={tens.show} currency={tens.currency} type={tens.type}/>
          <Denomination_Row label={fives.label} quantity={fives.quantity} show={fives.show} currency={fives.currency} type={fives.type}/>
          <Denomination_Row label={ones.label} quantity={ones.quantity} show={ones.show} currency={ones.currency} type={ones.type}/>
        </div>
        <div className="col s6">
          <Denomination_Row label={quarters.label} quantity={quarters.quantity} show={quarters.show} currency={quarters.currency} type={quarters.type}/>
          <Denomination_Row label={dimes.label} quantity={dimes.quantity} show={dimes.show} currency={dimes.currency} type={dimes.type}/>
          <Denomination_Row label={nickels.label} quantity={nickels.quantity} show={nickels.show} currency={nickels.currency} type={nickels.type}/>
          <Denomination_Row label={pennies.label} quantity={pennies.quantity} show={pennies.show} currency={pennies.currency} type={pennies.type}/>
        </div>
      </div>
    )
  }
}

export default Denomination_Grid;

