import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

 
  return (
    <div className="App">
     <Header></Header>
    </div>
  );
}

export default App;
