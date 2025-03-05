
import './App.css';
import Gallery from './gallery';

function App() {
  function handling(){
    alert("event fired")
  }
  return (
    <div className="App">
      <Gallery/>
      <button onClick={handling}>ClickMe</button>
      <button onClick={()=>handling("buttonClicked")}>ClickMe</button>
    </div>
  );
}

export default App;
