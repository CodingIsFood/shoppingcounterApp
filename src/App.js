import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar.jsx';
import Counters from './components/counters.jsx';

class App extends Component {

state={
    counters: [
       {id: 1, value: 0},
       {id: 2, value: 3},
       {id: 3, value: 0},
       {id: 4, value: 7}  
    ]

  }

  render() {
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length} />
      <main className="container">
      <Counters onReset={this.handleReset} onDelete={this.handleDelete} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} counters={this.state.counters}/>
      </main>
      </React.Fragment>
    );
  }

  handleDelete = (counterID) => {
    const counters=this.state.counters.filter(counter => counter.id !==counterID);
    this.setState({counters: counters});
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index]={...counter}
    counters[index].value++;
    this.setState({counters});
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index]={...counter}
    counters[index].value--;
    this.setState({counters});
  }

  handleReset = () => {
    const counters=this.state.counters.map(c => {
      c.value=0
      return c
    });
    this.setState({counters: counters});
    //console.log(counters);
  }

}

export default App;
