import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Page1 from './Pages/Page1';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>

      <Sidebar />
      <Page1 />
      </div>
    </div>
  );
}

export default App;
