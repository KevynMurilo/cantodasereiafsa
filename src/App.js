import React from 'react';
import './App.css';

import NavBar from './src/components/NavBar';
import Header from './src/components/Header';
import About from './src/components/About';
import Specialties from './src/components/Specialties';
import Menu from './src/components/Menu';
import Moment from './src/components/Moment';
import Location from './src/components/Location';
import Message from './src/components/Message';
import Footer from './src/components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Header/>
      <About />
      <Specialties/>
      <Menu />
      <Moment/>
      <Location />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
