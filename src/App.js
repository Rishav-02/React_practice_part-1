import logo from './logo.svg';
import './App.css';

import User from './User'; //functional Component
import Class from './Class';//class Component
import JSX from './JSX/Jsx';//Jsx
import Apple from './Function/Onclick';
import State from './State/Functional_component';
import Stateful from './State/Class_component';
import Student from './Props/Functional_props.js';
import Props from './Props/Update_props';
import Properties from './Props/Class_props';
import UpdateProps from './Props/Update_class_props';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React
        </p>
        {/* User components can be reused */}
        <Apple />
        <User></User>
        <Class />
        <State />
        <JSX />
        <Stateful />
        {/* We pass dynamic data and pass more than one data */}
        <Student name={"Ram"} email="Rishavsinha380@gmail.com" />
        <Student name={"Lekha"} email="LekhaAgustia1@gmail.com" />
        <Props month={"month"} />
        <Properties name=" Radha" mobile_no="1234567890"/>
        <UpdateProps />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}


export default App;