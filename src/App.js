import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Page1 from './Pages/Page1';
import './App.css';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import { Button } from 'antd';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScroll(scrollY);
      setIsVisible(scrollY < window.innerHeight * 2);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollDown = () => {
    window.scrollTo({
      top: scroll + window.innerHeight,
      behavior: 'smooth',
    });
  };
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
      {/* Page 3 */}
      <Navbar />
      <div className="content">
        <Page3 />
      </div>
      {/* Scroll Button */}
      <Button
        onClick={scrollDown}
        className="next-page-btn"
        style={{
          display: isVisible ? 'block' : 'none',
        }}
      >
        Next Page
      </Button>
    </div>
  );
};

export default App;
