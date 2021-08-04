import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { Login } from "../login/Login";
import { selectAuth } from "../login/LoginSlice";
import ProgressTracker from "../progressTracker/ProgressTracker";
import Register from "../register/Register";
import { selectProfile, setAlts, setMain } from "./ProfileSlice";
import { selectTechs, selectTerms } from "../trainers/trainersSlice";
import Goals from "../../components/Goals/Goals";
import "./Profile.css";
import { selectList } from "../characters/CharactersSlice";
import smashIcon from "../../img/SuperSmashBros-wallpaper-1-trimmed.jpg";
import { useState } from "react";
import useForm from "../../components/useForm/useForm";

const Profile = () => {
  const authenticated = useSelector(selectAuth);
  const terms = useSelector(selectTerms);
  const techs = useSelector(selectTechs);
  const profile = useSelector(selectProfile);
  const characters = useSelector(selectList);
  const [showMainSelect, toggleShowMainSelect] = useState(false);
  const [showAltSelect, toggleShowAltSelect] = useState(false);
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit, clearValues } = useForm(selectAlts);

  let termsToLearn = [];
  let techsToLearn = [];
  if (profile !== undefined && profile.status !== "loading") {
    termsToLearn =
      profile !== undefined
        ? terms.filter((term) => !profile.generalKnowledgeProgress.includes(term._id))
        : [];

    techsToLearn =
      profile !== undefined
        ? techs.filter((tech) => !profile.generalTechniqueProgress.includes(tech._id))
        : [];
  }
  function getCharacterImage(name) {
    return characters.length > 0
      ? characters.filter((character) => character.Name === name)[0].ThumbnailUrl
      : "";
  }

  function selectMain(character) {
    dispatch(setMain(character));
    toggleShowMainSelect(!showMainSelect);
  }

  function selectAlts() {
    const alts = [];
    for (const [value] of Object.entries(values)) {
      alts.push(value);
    }
    clearValues();
    dispatch(setAlts(alts));
    toggleShowAltSelect(!showAltSelect);
  }

  return authenticated ? (
    <div className="row h-100 w-100">
      <div className="col-2 nav-container">
        <NavBar />
      </div>
      <div className="col">
        <div className="row">
          <Login />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg tracker-container">
            <ProgressTracker title="Terms to Learn" listData={termsToLearn} />
          </div>
          <div className="col-lg tracker-container">
            <ProgressTracker title="Techniques to Learn" listData={techsToLearn} />
          </div>
          <div className="col-lg tracker-container">
            <ProgressTracker title="Charcters to Master" listData={termsToLearn} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col goal-container">
            <Goals />
          </div>
          <div className="col" id="main-character">
            <div className="row">
              <div className="col">
                <h6 className="">Main Character</h6>
              </div>
            </div>
            <div className="row justify-content-center">
              {profile.status === "idle" ? (
                profile.mainCharacter !== "none" ? (
                  <div
                    className="col image-container"
                    onClick={() => toggleShowMainSelect(!showMainSelect)}
                  >
                    <img
                      className="image-thumb"
                      src={getCharacterImage(profile.mainCharacter) || ""}
                      alt={profile.mainCharacter || "none"}
                    />
                    <div className="overlay">Change Main</div>
                  </div>
                ) : (
                  <div
                    className="col image-container"
                    onClick={() => toggleShowMainSelect(!showMainSelect)}
                  >
                    <img className="image-thumb" src={smashIcon} alt={"Set Main" || "none"} />
                    <div className="overlay">Select a Main!</div>
                  </div>
                )
              ) : (
                <div className="col">
                  <p>Loading profile...</p>
                </div>
              )}
            </div>
          </div>
          <div className="col" id="alt-characters">
            <div className="col">
              <h6>Alternate Characters</h6>
            </div>
            {profile.status === "idle" ? (
              profile.alternateCharacters.length > 0 ? (
                <div className="col scroll-y-225">
                  {profile.alternateCharacters.map((alt, index) => (
                    <div
                      key={`${alt}-${index}`}
                      className="col image-container"
                      onClick={() => toggleShowAltSelect(!showAltSelect)}
                    >
                      <img
                        className="image-thumb"
                        src={getCharacterImage(alt) || ""}
                        alt={alt || "None"}
                      />
                      <div className="overlay">Change Alts</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="col image-container"
                  onClick={() => toggleShowAltSelect(!showAltSelect)}
                >
                  <img className="image-thumb" src={smashIcon} alt={"Set alternate" || "None"} />
                  <div className="overlay">Choose Some Alternate Characters!</div>
                </div>
              )
            ) : (
              <div className="col">
                <p>Loading profile...</p>
              </div>
            )}
          </div>
        </div>
        {showMainSelect && (
          <div className="row justify-content-center">
            {characters.map((character) => (
              <div className="col image-container" onClick={() => selectMain(character.Name)}>
                <img src={character.ThumbnailUrl} className="image-thumb" alt={character.Name} />
              </div>
            ))}
          </div>
        )}
        {showAltSelect && (
          <form className="row justify-content-center" onSubmit={handleSubmit}>
            {characters.map((character) => (
              <div key={character._id} className="col image-container">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name={character.Name}
                    value={character.Name || ""}
                    id={character._id}
                    onChange={handleChange}
                  />
                  <label htmlFor={character._id}>
                    <img
                      src={character.ThumbnailUrl}
                      className="image-thumb"
                      alt={character.Name}
                    />
                  </label>
                </div>
              </div>
            ))}
            <button className="btn btn-outline-light">Confirm</button>
          </form>
        )}
      </div>
    </div>
  ) : (
    <Register />
  );
};

export default Profile;
