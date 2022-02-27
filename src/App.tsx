import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function trigger() {    
    const body = document.body;
    const classBody = body.classList;
    const result = classBody.toggle('dark')

    if (result) {
      console.log('dark added')
    } else {
      console.log('removed dark')
    }

  }

  return (
    <div className="App">
      <header className="App-header dark:bg-fuchsia-600">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="font-bold text-4xl underline text-red-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className='py-1 px-4 bg-slate-500 mt-2 rounded-md' onClick={() => trigger()}>Change theme</button>
      </header>
    </div>
  );
}

export default App;
