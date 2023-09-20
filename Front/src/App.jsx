//common imports
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
// Style Imports
import './App.css'
//module imports
import Nav from './components/NavBar/NavBar'
import PATHROUTES from './helpers/PATHROUTES'
import Cards from './components/Cards/Cards'
//view imports
import Favorites from './components/Favorites/Favorites'
import Detail from './components/Detail/Detail'
import About from './views/About.view'
// import LogIn from './views/LogIn.view'
import Form from './components/Forms/Form'

function App() {
  const [characters, setCharacters] = useState([])

//   !...............Logic for LogIn and LogOut.....................................
  const [access, setAccess] = useState(false)
  const EMAIL = ''
  const PASSWORD = ''
  const navigate = useNavigate();

  function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
    console.log(userData)
      setAccess(true);
      navigate('/home');
   }}

   useEffect(() => {
      !access && navigate('/');
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [access]);
   
   function logOut () {
      setAccess(false);
   }
// !...........................................................................

//!    El metodo .some recorre el array buscando por algun objeto que cumpla con la condicion
   function duplicateChar(characterId) {
      return characters.some((character) => character.id === characterId);
    }

    function getRandomCharacter() {
      const randomId = Math.floor(Math.random() * 826) + 1;
      return axios(`http://localhost:3001/rickandmorty/character/${randomId}`)
         .then(({ data }) => data)
         .catch((error) => {
            console.error("Error fetching random character:", error);
            return null;
         });
   }

const MAX_VALID_ID = 826;
function onSearch(id) {
  if (id <= 0 || id > MAX_VALID_ID) {
    window.alert('ID fuera de rango válido');
    return;
}      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
            if (data.name) {
               if(duplicateChar(data.id)){
                  window.alert("Personaje Duplicado!")
               } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
               window.alert('¡No hay personajes con este ID!');}
})
.catch(error => {
  window.alert('Ocurrió un error al obtener los datos del personaje.');
  console.error(error);
});
}

async function onRandom() {
   const randomCharacter = await getRandomCharacter();
   if (randomCharacter) {
      setCharacters((prevCharacters) => [...prevCharacters, randomCharacter]);
   }
}

function onClose(id) {
   setCharacters((oldChars) => oldChars.filter(character => character.id !== id));
}

const location = useLocation();
const showNavBar = location.pathname !== '/';




   return (
      <div className='App'>
            {showNavBar && <Nav
               onRandom={onRandom} 
               onSearch={onSearch}
               logOut={logOut}
               />}
   <Routes>
      <Route path={PATHROUTES.LOGIN} element={<Form login={login} />}/>
      <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />}/>
      <Route path={PATHROUTES.ABOUT} element={<About/>}/>
      <Route path={PATHROUTES.DETAIL} element={<Detail />}/>
      <Route path={PATHROUTES.FAVORITES} element={<Favorites/>}/>
   </Routes>
      </div>
   );

}

export default App
