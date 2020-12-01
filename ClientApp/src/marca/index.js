import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export class Marca extends Component {
    static displayName = Marca.name;
  
    constructor(props) {
      super(props);
      this.state = { currentCount: 0 };
      this.incrementCounter = this.incrementCounter.bind(this);
    }
  
    // incrementCounter() {
    //   this.setState({
    //     currentCount: this.state.currentCount + 1
    //   });
    // }
  
    render() {
      return (
        <div>
          <h1>Marca</h1>
  
          <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>
  
          <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
        </div>
      );
    }
  }