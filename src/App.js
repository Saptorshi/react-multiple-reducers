import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Col">
          <span>A</span> : <span>{this.props.a}</span>
          <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
        </div>
        <div className="Col">
          <span>B</span> : <span>{this.props.b}</span>
          <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
        </div>        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    a : state.rA.a,
    b : state.rB.b
  }
}

const mapDispatchToProps = (dispach) => {
  return {
    updateA: (b) => dispach({type : 'UPDATE_A', b : b}),
    updateB: (a) => dispach({type : 'UPDATE_B', a : a}),
    // onDelItem: (id) => dispach({type : 'DEL_ITEM', key : id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
