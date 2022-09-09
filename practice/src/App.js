import { Component } from 'react'
import logo from './logo.svg';
import Props from './Props'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      name: "Jazmine",
      company: "Dorreans House",
    }
  }
changeTxt(){
  this.setState({
    name:"Dorrean",
    company: "Jazmine's House"
  })
}

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Props name="Dorrean" company="HenryFord Health System" />
        <p>
          Hello {this.state.name} would you like to work at {this.state.company}!
        </p>
        <button onClick={()=> this.changeTxt()}>
          Change the Text
        </button>
        
      </header>

    </div>
  );
  }
}

export default App;
