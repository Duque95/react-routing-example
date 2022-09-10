import {Routes, Route} from "react-router-dom";
import About from "./components/About";
import Home from './components/Home';
import Menu from "./components/Menu";
import HeroList from "./components/HeroList"
import  HeroDisplay  from "./components/HeroDisplay"
import { randSuperhero } from '@ngneat/falso';
import { useState } from "react";

const container = {
  width: '70%', 
  margin: '20px auto'
}

const App = () => {
  const [heroes, setHeroes] = useState(randSuperhero({ length: 10}))

  return (
    <div style={ container }>
      <h1>REACT ROUTER EXAMPLE</h1>
      <fieldset>
        <legend>App</legend>
      </fieldset>
      <Menu />
      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/heroes" element={ <HeroList heroes={heroes}/> } />
        <Route path="/heroes/:id" element={ <HeroDisplay /> } />
      </Routes>
    </div>
  )
}
export default App;
