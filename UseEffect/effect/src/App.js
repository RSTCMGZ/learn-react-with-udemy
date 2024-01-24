import './App.css';
import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log('ilk kez render edildiğinde çalışır daha da çalışmaz');
  }, [])
  useEffect(() => {
    console.log(`Her zaman çalıır`);
  })

  useEffect(() => {
    console.log('ilk kez render edildiğinde çalışır  + değerde değişiklik olduğunda çalışır');

  }, [])
  const [reso, setReso] = useState(0)
  const [reso2, setReso2] = useState(0)


  return (
    <div className="App">
      <div>
        <button onClick={() => setReso(reso + 1)}> Reso ++ </button>
        <div>Reso : {reso} </div>
      </div>
      <div>
        <button onClick={() => setReso2(reso2 + 1)}> Reso2 ++ </button>
        <div>Reso2 : {reso2} </div>
      </div>
    </div>
  );
}

export default App;
