import {useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../Card/Card";
const Favorites = ({ onClose }) => {
  const myFavorites = useSelector((state) => state.myFavorites);
  return (
    <>
      {myFavorites.map((character) => {
        return (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
          />
        );
      })}
      ;
    </>
  );
};
export default Favorites;
