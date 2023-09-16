import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState("");
  const [tasce, setAsce] = useState("");
  const [varta, setVara] = useState("");

  // const onTasc = () => {

  // }
  return (
    
    <div className="App">
      <div>
        <h1 style={{color: "blueviolet"}}>Sign Up</h1>
        <div>
                  <input value={state} onChange={(event) => {setState(event.target.value)}} type="text" placeholder='Name' style={{ width: "350px", height: "30px"}}/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <input value={tasce} onChange={(event) => {setAsce(event.target.value)}} type="text" placeholder='Email id'  style={{ width: "350px", height: "30px"}}/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <input value={varta} onChange={(event) => {setVara(event.target.value)}} type="password" placeholder='Password'  style={{ width: "350px", height: "30px"}}/>

        </div>
        {/* <div> */}
          <button onClick={setState}>Sign Up</button> 
          <button>Login</button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
