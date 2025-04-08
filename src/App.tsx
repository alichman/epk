import { useEffect, useMemo, useState } from 'react';
import './App.css';
import MainPage from './components/mainpage';
import Button from './components/button';
import Gallery from './components/gallery';
import Music from './components/music';

function App() {
  const [cPageIndex, setCPageIndex] = useState(0);
  const currentPage = useMemo(() => [<MainPage/>, <Gallery/>, <Music/>][cPageIndex], [cPageIndex]);

  return (
    <div className="App">
      <div className= {'navAndContent-h'} >
        {currentPage}
        <div className={'navbar-h'}>
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
