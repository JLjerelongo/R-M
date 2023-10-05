import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from "axios";
import {Routes, Route} from "react-router-dom"
import About from './components/About';
import Detail from './components/Detail';


function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-jljerelongo`)
      .then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   function onClose(id){
      setCharacters(characters.filter((character) => character.id !== id))
   }

   return (
      <div className='App'>
         <Nav onSearch= {onSearch} />

         <Routes>
                  <Route path='/home' element={ <Cards characters={characters} onClose = {onClose}/> } />
                  <Route path='/about' element={ <About/> }/>
                  <Route path='/detail/:id' element={ <Detail/> } />
         </Routes>

      </div>
   );
}

export default App;
