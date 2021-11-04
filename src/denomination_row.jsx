import React from 'react';

export class Denomination_Row extends React.Component{
  render() {

    let display;
    this.props.show ? display = 'row': display = 'hide'; 
    let img = `https://raw.githubusercontent.com/alexkmartinez77/web102-change-calculator/main/public/images/${this.props.currency}.png`
    let type = this.props.type;
    
    return (
      <div className={display}>
      <table className="centered">
        <tbody>
          <tr>
            <td><p className="sarpanchFont counters">{this.props.quantity}</p></td>
            <td><img src={img} className={type}/></td>
            <td><p className="bebasFont counters">{this.props.label}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

export default Denomination_Row;