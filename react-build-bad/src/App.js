// LargeComponent.js
import React, { Component } from 'react';
import lodash from 'lodash';
import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/es/symbol';
import moment from 'moment';

class LargeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
    };
  }

  componentDidMount() {
    const data = lodash.range(1, 1000).map(num => num * 2);
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <p>Current Date: {this.state.currentDate}</p>
        {this.state.data.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    );
  }
}

export default LargeComponent;