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


const App = () => {
   // ! HOOKS
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   const [access, setAccess] = useState(false);
   const  navigate = useNavigate();
   
   
   // ! CREDECIALES FAKE
   const email = "jerelongo09@gmail.com";
   const password = "mipass123"
   
   // ! EVENT HANDLERS
   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   };
      
      function onClose(id){
         setCharacters(characters.filter((character) => character.id !== id))
      }
      
      const login = async (userData) => {
         try {
            const { email, password } = userData;
            const URL = 'http://localhost:3001/rickandmorty/login/';
            const { data } = await axios(`${URL}?email=${email}&password=${password}`)
            const { access } = data;
            setAccess(data);
            access && navigate('/home');

         } catch (error) {
            throw Error(error.message)
         }
      };
      
      useEffect(() => {
      !access && navigate('/');
      }, [access]);

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