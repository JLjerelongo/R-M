import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites';


function App() {
   // ! HOOKS
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   const [access, setAccess] = useState(false);
   const  navigate = useNavigate();
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   // ! CREDECIALES FAKE
   const email = "jerelongo09@gmail.com";
   const password = "mipass123"

   // ! EVENT HANDLERS
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

   const login = (userData) => {
      if(userData.email === email && userData.password == password){
         setAccess(true);
         navigate("/home");
      }else{
         alert("Credenciales incorrectas")
      }
   };

   // ! RENDER

   return (
      <div>

         {pathname !== "/" && <Nav onSearch= {onSearch} />}

         <Routes>
                  <Route path='/' element= { < Form login={login} /> }/>
                  <Route path='/home' element={ <Cards characters={characters} onClose = {onClose}/> } />
                  <Route path='/about' element={ <About/> }/>
                  <Route path='/detail/:id' element={ <Detail/> } />
                  <Route path='/favorites' element= { <Favorites/> }/>
         </Routes>

      </div>
   );
}

export default App;