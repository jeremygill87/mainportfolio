import React, { Component } from 'react';
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import pageData from "./pageData";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header pageData={pageData}/>
        <MainPage pageData={pageData}/>
        <Resume pageData={pageData}/>
        <Portfolio pageData={pageData}/>
        <Testimonials pageData={pageData}/>
        <Contact pageData={pageData}/>
        <Footer pageData={pageData}/>
      </div>
    );
  }
}

export default App;
