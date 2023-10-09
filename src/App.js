import logo from './logo.svg';
import './App.css';
import Test from './component/Test';
import { useState } from 'react';

function App() {
  const[value,setValue] = useState("share the data from parent to child... (lifting)")
  const parent = (data) => {
    setValue(data);
  }

  return (
    <div className="App">
      {parent}
      <Test fun={parent} strValue={value}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
