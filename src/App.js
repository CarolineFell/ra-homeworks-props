import React from 'react';
import Stars from './components/Stars';
import Header from './components/Header';
import './App.css';

function App() {
  return (<>
    <Header />
    <div className="App">
     <Stars count={0} />
     <Stars count={1} />
     <Stars count={2} />
     <Stars count={3} />
     <Stars count={4} />
     <Stars count={5} />
     <Stars count={6} />
     <Stars count={7} />
    </div>
  </>);
}

export default App;