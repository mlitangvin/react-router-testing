import React, { Component } from 'react';
import { withRouter, Redirect, Route } from 'react-router-dom'; // Is withRouter even required here?

import LoremIpsum from './LoremIpsum';
import KittyIpsum from './KittyIpsum';
import BabyIpsum from './BabyIpsum';

class App extends Component {
  state = {
    step: 1,
    valid: true
  };

  handleClick = () => {
    if (this.state.valid) {
      if (this.state.step === 3) {
        this.setState({ step: 1 });
      } else {
        this.setState({ step: this.state.step + 1 });
      }
    } else {
      console.log('Sorry, not valid. Cannot proceed.');
    }
  };

  routeDecider = () => {
    switch (this.state.step) {
      case 1:
        console.log('Hello Case 1');
        return <Redirect push to="/lorem-ipsum" />
      case 2:
        console.log('Hello Case 2');
        return (
          <Redirect push to="/kitty-ipsum" />
        );
      case 3:
        console.log('Hello Case 3');
        return (
          <Redirect push to="/baby-ipsum" />
        );
      default:
        console.log("This shouldn't run");
        break;
    }
  };

  render() {
    console.log('Hello');
    return (
      <div className="App">
        {this.routeDecider()}
        <Route
          path="/lorem-ipsum"
          render={routeProps => <LoremIpsum {...routeProps} />}
        />
        <Route
          path="/kitty-ipsum"
          render={routeProps => <KittyIpsum {...routeProps} />}
        />
        <Route
          path="/baby-ipsum"
          render={routeProps => <BabyIpsum {...routeProps} />}
        />
        <button onClick={this.handleClick}>What Ipsum?</button>
      </div>
    );
  }
}

export default withRouter(App);
