import { useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { selectList } from "../../features/characters/CharactersSlice";
import { Login } from "../../features/login/Login";
import smashIcon from "../../img/SuperSmashBros-wallpaper-1-trimmed.jpg";
import SingleCharacter from "../Characters/SingleCharacter";
import "./MatchupAnalyzer.css";

const MatchupAnalyzer = () => {
  const [playerOne, setPlayerOne] = useState("none");
  const [playerTwo, setPlayerTwo] = useState("none");
  const [showPlayerOneSelect, toggleShowPlayerOneSelect] = useState(false);
  const [showPlayerTwoSelect, toggleShowPlayerTwoSelect] = useState(false);
  const [showComparisonSimple, toggleShowComparisonSimple] = useState(false);
  const [showComparisonDetailed, toggleShowComparisonDetailed] = useState(false);
  const characters = useSelector(selectList);

  function setMatchup(player, character) {
    if (player === 1) {
      setPlayerOne(character);
      toggleShowPlayerOneSelect(!showPlayerOneSelect);
    }
    if (player === 2) {
      setPlayerTwo(character);
      toggleShowPlayerTwoSelect(!showPlayerTwoSelect);
    }
  }

  function switchDetail() {
    toggleShowComparisonSimple(!showComparisonSimple);
    toggleShowComparisonDetailed(!showComparisonDetailed);
  }

  function resetUI() {
    toggleShowPlayerOneSelect(false);
    toggleShowPlayerTwoSelect(false);
    toggleShowComparisonSimple(false);
    toggleShowComparisonDetailed(false);
    setPlayerOne("none");
    setPlayerTwo("none");
  }

  function compareCharacters() {
    toggleShowComparisonSimple(!showComparisonSimple);
  }

  return (
    <div className="row h-100 w-100">
      <div className="col-2 nav-container">
        <NavBar />
      </div>
      <div className="col justify-content-center">
        <div className="row m-auto w-fit">
          <Login />
        </div>
        <br />
        <br />
        <div className="row justify-content-center">
          {playerOne !== "none" ? (
            <div
              className="col-3 image-container"
              onClick={() => toggleShowPlayerOneSelect(!showPlayerOneSelect)}
            >
              <img src={playerOne.ThumbnailUrl} alt={playerOne.Name} />
              <div className="overlay-matchup">Change your character</div>
            </div>
          ) : (
            <div
              className="col-3 image-container"
              onClick={() => toggleShowPlayerOneSelect(!showPlayerOneSelect)}
            >
              <img className="image-thumb" src={smashIcon} alt={"Set Main" || "none"} />
              <div className="overlay-matchup">Select your character</div>
            </div>
          )}

          {playerTwo !== "none" ? (
            <div
              className="col-3 image-container"
              onClick={() => toggleShowPlayerTwoSelect(!showPlayerTwoSelect)}
            >
              <img src={playerTwo.ThumbnailUrl} alt={playerTwo.Name} />
              <div className="overlay-matchup">Change your character</div>
            </div>
          ) : (
            <div
              className="col-3 image-container"
              onClick={() => toggleShowPlayerTwoSelect(!showPlayerTwoSelect)}
            >
              <img className="image-thumb" src={smashIcon} alt={"Set Main" || "none"} />
              <div className="overlay-matchup">Select your Opponent</div>
            </div>
          )}
        </div>
        {showPlayerOneSelect && (
          <div className="row justify-content-center">
            {characters.map((character) => (
              <div className="col image-container" onClick={() => setMatchup(1, character)}>
                <img src={character.ThumbnailUrl} className="image-thumb" alt={character.Name} />
              </div>
            ))}
          </div>
        )}
        {showPlayerTwoSelect && (
          <div className="row justify-content-center">
            {characters.map((character) => (
              <div className="col image-container" onClick={() => setMatchup(2, character)}>
                <img src={character.ThumbnailUrl} className="image-thumb" alt={character.Name} />
              </div>
            ))}
          </div>
        )}
        <br />
        <div className="row">
          <div className="col w-fit">
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={() => compareCharacters()}
            >
              COMPARE
            </button>
          </div>
        </div>
        {showComparisonSimple && (
          <>
            <div className="row justify-content-center">
              <div className="col">
                <img
                  src={playerOne.MainImageUrl}
                  alt={playerOne.Name}
                  className="simple-container"
                />
              </div>
              <div className="col">
                <img
                  src={playerTwo.MainImageUrl}
                  alt={playerTwo.Name}
                  className="simple-container"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-outline-light"
                  type="button"
                  onClick={() => switchDetail()}
                >
                  DETAILED
                </button>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-outline-secondary fa fa-refresh"
                  type="button"
                  onClick={() => resetUI()}
                ></button>
              </div>
            </div>
          </>
        )}
        {showComparisonDetailed && (
          <>
            <div className="row justify-content-center">
              <div className="col m-auto">
                <SingleCharacter activeCharacter={playerOne} toggleShowOne={() => resetUI()} />
              </div>
              <div className="col m-auto">
                <SingleCharacter activeCharacter={playerTwo} toggleShowOne={() => resetUI()} />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col">
                <button
                  className="btn btn-outline-light"
                  type="button"
                  onClick={() => switchDetail()}
                >
                  SIMPLE
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MatchupAnalyzer;
