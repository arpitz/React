import React from 'react';
import './App.css';
import Form from './components/customHooks/Form';
import DocTitleOne from './components/customHooks/DocTitleOne';
import DocTitleTwo from './components/customHooks/DocTitleTwo';

function App() {
  return (
    <div className="App">
    <DocTitleOne />
    <DocTitleTwo/>
    </div>
  );
}

export default App;
