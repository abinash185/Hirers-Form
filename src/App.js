import React from 'react';
import './App.css';
import Header from '../src/components/header/bar.js';
import Container from './components/container/container.js';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header style={{ alignSelf: 'flex-start' }} />
      <div style={{ display : "flex" , justifyContent : "center" , alignItems : "center" , background : "#E8E9EB" , height : "85%"}}><Container/></div>
      <Header style={{ alignSelf: 'flex-end' }} />
    </div>
  );
}

export default App;
