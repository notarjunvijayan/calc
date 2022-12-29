import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <div className="heading">
        <div>
          <h1>Calculator</h1>
          <p>By <a href='https://www.notarjunvijayan.me' target='_blank'>Arjun Vijayan</a></p>
        </div>
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
