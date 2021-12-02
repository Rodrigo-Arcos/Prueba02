import './App.css';
import React, { Component } from "react";
import logo from './img/imagen_1.jpg';


class App extends Component {
  

  constructor(props) {
    super(props);
    this.state = { data: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/getList")
      .then(res => res.text())
      .then(res => this.setState({ data : res }))
      .catch(err => err);
  }

  UNSAFE_componentWillMount() {
    this.callAPI();
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lista de usuarios</h1>
          <img className="imagen" src={logo} alt="imagen" />
        </header>
      </div>
    );
  }
}





export default App;

