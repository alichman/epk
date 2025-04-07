import React, { createRef, Ref, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import MainPage from './components/mainpage';
import Button from './components/button';

function App() {
  const [cPageIndex, setCPageIndex] = useState(0);
  const [isNavVertical, setNavVertical] = useState(false);
  const currentPage = useMemo(() => [<MainPage/>][cPageIndex], [cPageIndex]);

  useEffect(() => {
  
    const handleResize = () => {
      const width = document.body.getBoundingClientRect().width;
      setNavVertical(width < 2000);
    }
    
    window.addEventListener('resize', handleResize);
    
    return () => {
     window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <div className= {isNavVertical ? 'navAndContent-v' : 'navAndContent-h'} >
        {currentPage}
        <div className={isNavVertical ? 'navbar-v' : 'navbar-h'}>
          <Button text='Bio' currentIndex={cPageIndex} stateSetter={setCPageIndex} buttonIndex={0}/>
          <Button text='Gallery' currentIndex={cPageIndex} stateSetter={setCPageIndex} buttonIndex={1}/>
          <Button text='Music' currentIndex={cPageIndex} stateSetter={setCPageIndex} buttonIndex={2}/>
          <Button text='Upcoming Shows' currentIndex={cPageIndex} stateSetter={setCPageIndex} buttonIndex={3}/>
          <Button text='Discography' currentIndex={cPageIndex} stateSetter={setCPageIndex} buttonIndex={4}/>
          <Button text='Accolades and Press' currentIndex={cPageIndex} stateSetter={setCPageIndex} buttonIndex={5}/>
          <Button text='Assets' currentIndex={cPageIndex} stateSetter={setCPageIndex} buttonIndex={6}/>
        </div>
      </div>
    </div>
  );
}

export default App;
