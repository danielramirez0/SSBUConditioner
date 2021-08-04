import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveCharacter,
  selectList,
  setActiveCharacter,
} from "../../features/characters/CharactersSlice";
import NavBar from "../NavBar/NavBar";
import "./Characters.css";
import SingleCharacter from "./SingleCharacter";

const Characters = () => {
  const [showOne, toggleShowOne] = useState(false);
  const [activeCharacter, setActiveCharacter] = useState();
  const characters = useSelector(selectList);

  function setCharacter(character) {
    setActiveCharacter(character);
    toggleShowOne(!showOne);
  }
  // function setCharacter(id) {
  //   if (characters.state !== "loading") {
  //     const filterCharacters = [...characters];
  //     const character = filterCharacters.filter((char) => {
  //       return char._id === id;
  //     })[0];
  //     dispatch(setActiveCharacter(character));
  //     toggleShowOne(!showOne);
  //   }
  // }

  return (
    <div className="row h-100 w-100 text-center">
      <div className="col-2 nav-container">
        <NavBar />
      </div>
      {!showOne ? (
        <div className="col-10">
          <div className="row mt-10">
            {characters.map((character) => (
              <div
                key={character._id}
                className="col image-container"
                onClick={() => setCharacter(character)}
              >
                <img
                  className="image-thumbnail"
                  src={character.ThumbnailUrl || ""}
                  alt={character.Name || "none"}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <SingleCharacter
          activeCharacter={activeCharacter}
          toggleShowOne={() => toggleShowOne(!showOne)}
        />
      )}
    </div>
  );
};

export default Characters;
