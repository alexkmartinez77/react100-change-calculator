import React from 'react';

export class Tagline extends React.Component{

  render() {
    return (
      <div className="row">
        <div className="center-align">
          <span className="counterHeaders verticalAlign">v2.0
            <sup>
              <img className="reactLogo verticalAlign" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/440px-React-icon.svg.png"/> Powered by React
            </sup>
          </span>
        </div>
      </div>
    )
  }
}

export default Tagline;

