import React, { Component } from 'react';
import './App.css';
import Result from './components/resultdisplay';
import KeyPad from './components/keypad'

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if (button === "=") {
      this.calculate()
    } else if (button === "C") {
      this.reset()
    } else if (button === "CE") {
      this.backspace()
    } else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    var theResult = ''
    theResult = this.state.result

    try {
      this.setState({
        result: (eval(theResult) || "" ) + ""
      })
    } catch (error){
      this.state({
        result: "error"
      })
    }
  };

  reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <Result result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
