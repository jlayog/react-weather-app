import logo from './logo.svg';
import './App.css';
import Forecast from './hooks/Forecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
     </header>
     <main>
       <Forecast />
     </main>
    </div>
  );
}

export default App;
