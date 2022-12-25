import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  );
}

export default App;
