import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
;
import Parent from "./components/Parentprops";
import Greeting from "./components/Greeting";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";

function App() {
  return (
  <>
      {/* <Greeting /> */}

      {/* <Parent/> */}
      <ConditionalRendering/>
      <ListRendering/>
      </>
  
  );
}

export default App;

