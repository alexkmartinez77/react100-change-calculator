import React from 'react';

export class Denomination_Row extends React.Component{
  render() {

    let display;
    this.props.show ? display = 'row': display= 'hide'; 

    return (
      <div className={display}>
      <table className="centered">
        <tbody>
          <tr>
            <td><p className="sarpanchFont counters">{this.props.quantity}</p></td>
            <td><div className=" teal lighten-2 dollarImg"></div></td>
            <td><p className="bebasFont counters">{this.props.label}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

export default Denomination_Row;