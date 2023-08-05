import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const{tg,onToggleButton} =useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

 
  return (
    <div className="App">
      <button onClick={onToggleButton}></button>
      <Header></Header>
    </div>
  );
}

export default App;
