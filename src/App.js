import React, { Component } from 'react';
import Header from "./components/Header";
import Contact from "./components/Contact";
import IntroScreen from "./components/IntroScreen";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header pageData={pageData}/>
        <Contact pageData={pageData}/>
        <IntroScreen pageData={pageData}/>
        <Footer pageData={pageData}/>
        <MainPage pageData={pageData}/>
        <Portfolio pageData={pageData}/>
        <Resume pageData={pageData}/>
        <Testimonials pageData={pageData}/>
      </div>
    )
  }
}

export default App;
