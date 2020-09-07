import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from "./components/header/header.component.tsx";
import { Contact } from "./components/contact/contact.component.tsx";
import { Experience } from "./components/experience/experience.component.tsx";
import { Projects } from "./components/projects/projects.component.tsx";
import { Education } from "./components/education/education.component.tsx";
import { Miscellaneous } from "./components/miscellaneous/miscellaneous.component.tsx";


function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Experience />
      <Projects />
      <Education />
      <Miscellaneous />
    </div>
  );
}

export default App;
