import React from 'react';
import './App.css';
import CounterOne from './components/customHooks/CounterOne';
import CounterTwo from './components/customHooks/CounterTwo';

function App() {
  return (
    <div className="App">
    <CounterOne/>
    <CounterTwo/>
    </div>
  );
}

export default App;
