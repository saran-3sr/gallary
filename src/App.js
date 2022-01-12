import './App.css';
import Title from './comp/Title'
import Form from './comp/Form'
import React from 'react';
import Photogrid from './comp/photogrd';
function App() {
  return (
    <div className="App">
      <Title/>
      <Form/>
      <Photogrid/>
    </div>
  );
}

export default App;
