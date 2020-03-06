import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [userId, setUserId] = useState(0);
  const [userPw, setUserPw] = useState(0);

  useEffect(() =>{
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
    fetch('/api/auth/login').then(res => res.json()).then(data => {
      setUserId(data.uid);
      setUserPw(data.upw);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
        <p>The current time is {currentTime}.</p>
        <p>Current uid : {userId} and upw : {userPw}</p>
      </header>
    </div>
  );
}

export default App;
