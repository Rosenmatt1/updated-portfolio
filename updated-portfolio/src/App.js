import React, { Component } from 'react'
import './App.css';

import Header from './components/Header.js';
import Project1 from './components/Project1';
import ModalProject1 from './components/ModalProject1'
import Footer from './components/Footer.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      modal1Toggle: false,
      modal2Toggle: false,
      modal3Toggle: false,
      modal4Toggle: false,
      modal5Toggle: false,
      modal6Toggle: false,
      modal7Toggle: false,
      modal8Toggle: false,
      aboutMeDisplay: false,
      projectsDiplay: true,
      serverWakeUp: false
    }
  }

  modal1 = () => {
    this.setState({
      modal1Toggle: true
    })
  }


  modalOff = () => {
    this.setState({
      modal1Toggle: false,
      modal2Toggle: false,
      modal3Toggle: false,
      modal4Toggle: false,
      modal5Toggle: false,
      modal6Toggle: false,
      modal7Toggle: false,
      modal8Toggle: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Project1 modal1={this.modal1} />

        {this.state.modal1Toggle &&
          <ModalProject1 modalOff={this.modalOff} />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
