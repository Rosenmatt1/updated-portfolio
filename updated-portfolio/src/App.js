import React, { Component } from 'react'
import './App.css';

import Header from './components/Header.js';
import Project1 from './components/Project1';
import ModalProject1 from './components/ModalProject1'
import Project2 from './components/Project2';
import ModalProject2 from './components/ModalProject2'
import Project3 from './components/Project3';
import ModalProject3 from './components/ModalProject3'
import Project4 from './components/Project4';
import ModalProject4 from './components/ModalProject4'
import Project5Uber from './components/Project5Uber';
import ModalProject5 from './components/ModalProject5'
import Project6Weather from './components/Project6Weather';
import ModalProject6 from './components/ModalProject6'
import Project7Form from './components/Project7Form';
import ModalProject7 from './components/ModalProject7'
import Project8Music from './components/Project8Music';
import ModalProject8 from './components/ModalProject8'
import Project9Chuck from './components/Project9Chuck';
import ModalProject9 from './components/ModalProject9'
import Project10Poker from './components/Project10Poker';
import ModalProject10 from './components/ModalProject10'

import AboutMe from './components/AboutMe'
import ReactCards from './components/cards/ReactCards.js'

import ParallaxTop from './components/ParallaxTop.js'
import ParallaxMiddle from './components/ParallaxMiddle.js'

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
      modal9Toggle: false,
      modal10Toggle: false,
      modal11Toggle: false,
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

  modal2 = () => {
    this.setState({
      modal2Toggle: true
    })
  }

  modal3 = () => {
    this.setState({
      modal3Toggle: true
    })
  }

  modal4 = () => {
    this.setState({
      modal4Toggle: true
    })
  }

  modal5 = () => {
    this.setState({
      modal5Toggle: true
    })
  }

  modal6 = () => {
    this.setState({
      modal6Toggle: true
    })
  }

  modal7 = () => {
    this.setState({
      modal7Toggle: true
    })
  }

  modal8 = () => {
    this.setState({
      modal8Toggle: true
    })
  }

  modal9 = () => {
    this.setState({
      modal9Toggle: true
    })
  }

  modal10 = () => {
    this.setState({
      modal10Toggle: true
    })
  }

  modal11 = () => {
    this.setState({
      modal11Toggle: true
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
      modal8Toggle: false,
      modal9Toggle: false,
      modal10Toggle: false,
      modal11Toggle: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <ParallaxTop />
        {/* <ParallaxMiddle /> */}

        <AboutMe />
        <ReactCards />

        {this.state.modal10Toggle &&
          <ModalProject10 modalOff={this.modalOff} />
        }

        <Project10Poker modal5={this.modal10} />

        {this.state.modal5Toggle &&
          <ModalProject5 modalOff={this.modalOff} />
        }

        <Project5Uber modal5={this.modal5} />

        {this.state.modal6Toggle &&
          <ModalProject6 modalOff={this.modalOff} />
        }

        <Project6Weather modal6={this.modal6} />

        <Project7Form modal7={this.modal7} />

        {this.state.modal7Toggle &&
          <ModalProject7 modalOff={this.modalOff} />
        }

        {this.state.modal8Toggle &&
          <ModalProject8 modalOff={this.modalOff} />
        }

        <Project8Music modal8={this.modal8} />


        {this.state.modal3Toggle &&
          <ModalProject3 modalOff={this.modalOff} />
        }

        <Project3 modal3={this.modal3} />


        {this.state.modal4Toggle &&
          <ModalProject4 modalOff={this.modalOff} />
        }

        <Project4 modal4={this.modal4} />

        {this.state.modal2Toggle &&
          <ModalProject2 modalOff={this.modalOff} />
        }

        <Project2 modal2={this.modal2} />

        <Project1 modal1={this.modal1} />

        {this.state.modal1Toggle &&
          <ModalProject1 modalOff={this.modalOff} />
        }

        {this.state.modal9Toggle &&
          <ModalProject9 modalOff={this.modalOff} />
        }

        <Project9Chuck modal9={this.modal9} />

        <Footer />
      </div>
    );
  }
}

export default App;
