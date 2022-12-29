import './App.css';
import Calculator from './Calculator';
import {motion} from 'framer-motion'

function App() {
  return (
    <div className="App">
      <div className="heading">
        <div>
          <motion.div
          animate= {{y:5}}
          transition = {{type: 'spring',duration: 1}}
          >
            <h1>Calculator</h1>
          </motion.div>
          <motion.div
          animate = {{y:5}}
          transition = {{type:'spring',duration:1}}>
            <p>By <a href='https://www.notarjunvijayan.me' target='_blank' rel="noreferrer">Arjun Vijayan</a></p>
          </motion.div>
        </div>
      </div>
      <motion.div
      animate = {{y:5}}
      transition = {{type: 'spring', duration: 1,}}>
      <div className="container">
      <div className="canvas">
        <Calculator/>
      </div>
      </div>
      </motion.div>
      
    </div>
  );
}

export default App;
