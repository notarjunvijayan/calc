import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>Calculator App</h1>
      </div>
      <div className="container">
      <div className="canvas">
        <Calculator/>
      </div>
      </div>
    </div>
  );
}

export default App;
