import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import axios from "axios";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites.jsx";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "./components/redux/actions.js";
function App() {
  //crear estado
  let [characters, setCharacters] = useState([]);
  const location = useLocation();
  const dispatch =useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);

  const onSearch = (id) => {
    // const randomId= Math.floor(Math.random()* 826)+1;
    if (id) {
      axios(`https://rickandmortyapi.com/api/character/` + id).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            alert("¡No hay personajes con este ID!");
          }
        }
      );
    } else randoCharacter();
  };
  const randoCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;

    axios(`https://rickandmortyapi.com/api/character/` + randomId).then(
      ({ data }) => {
        const characterExists = characters.includes(data);

        if (characterExists) {
          randoCharacter();
        } else {
          setCharacters((characters) => [...characters, data]);
        }
      }
    );
  };

  const onClose = (id) => {
    let charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
    const findFavorite = myFavorites.find((favorite) =>{
      return favorite.id === Number(id)
    });
    
    if(findFavorite) {  
      
      dispatch(removeFav(id));
    }    

  };
  function verificarRuta() {
    return location.pathname !== "/";
  }

  return (
    <div className="App">
      {verificarRuta() && <Nav onSearch={onSearch}></Nav>}
      <Routes>
        <Route path={"/"} element={<Form />} />
        <Route
          path={"home"}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="favorites" element= {<Favorites onClose={onClose}/>}/>
      </Routes>
    </div>
  );
}

export default App;
