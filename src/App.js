// src/App.js
import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Greeting from './Greeting';
import Counter from './Counter';
import SimpleForm from './SimpleForm';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Greeting name="Juan" />
      <Greeting name="María" />
      <Greeting name="Carlos" />
      <Counter />
      <SimpleForm />
    </div>
  );
}

export default App;
