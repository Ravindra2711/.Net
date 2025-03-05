import './App.css';
import State from './state.js';
import CountApp from './useCount.js';

function App() {
  return (
    <div className="App">
      <State />
      <CountApp/>
    </div>
  );
}

export default App;
