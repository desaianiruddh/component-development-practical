import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Page1 from './Pages/Page1';
import './App.css';
import Page2 from './Pages/Page2';

const App = () => {
  return (
    <div className="App">
      {/* page 1 */}
      <Navbar movieList />
      <div className="content">
        <Sidebar />
        <Page1 />
      </div>
      {/* Page 2 */}
      <Navbar />
      <div className="content">
        <Page2 />
      </div>
    </div>
  );
};

export default App;
