import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './App.css';
import Parent from "./components/Parentprops";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="container">
      {/* <Greeting /> */}

      <Parent/>
    </div>
  );
}

export default App;

