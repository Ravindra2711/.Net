import './App.css';
import PostList from './PostList.js';
import State from './state.js';
import CountApp from './useCount.js';
import CounterExample from './useEffect.js';

function App() {
  return (
    <div className="App">
      <State />
      <CountApp/>
      <CounterExample/>
      <PostList/>
    </div>
  );
}

export default App;
