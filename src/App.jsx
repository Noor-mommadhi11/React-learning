import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Parent from "./components/Parentprops";
import Greeting from "./components/Greeting";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import SignInPage from "./components/SignInPage";
import RegistrationForm from "./components/RegistrationForm";
import StopwatchTimer from "./components/StopwatchTimer";
import UseRef from "./components/UseRef";
import ParentNested from "./components/ParentNested";
import ParentContext from "./components/ParentContext";

import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Profile from "./components/pages/Profile";
import Services from "./components/pages/Services";
import WebDevelopment from "./components/pages/WebDevelopment";
import AppDevelopment from "./components/pages/AppDevelopment";
import UiUx from "./components/pages/UiUx";
import UserList from "./components/UserList";
import UserData from "./components/UserData";



function App() {
  return (
  <>
      {/* <Greeting /> */}

      {/* <Parent/> */}
      {/* <ConditionalRendering/>
      <ListRendering/> */}
      {/* <SignInPage/> */}
      {/* <RegistrationForm/>
      <StopwatchTimer/>
      <UseRef/>
      <ParentNested /> */}/
      {/* <ParentContext /> */}

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Profile />} />

          <Route path="services" element={<Services />}>
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="app-development" element={<AppDevelopment />} />
            <Route path="ui-ux" element={<UiUx />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
       */}

         <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserData />} />
      </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;

