import { useHistory } from "react-router-dom";
import useForm from "../../components/useForm/useForm";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setJWT, selectAuth, setHeaders } from "../login/LoginSlice";
import { selectList } from "../characters/CharactersSlice";
import { postNewUser } from "../../services/user";
import "./Register.css";
import ListSelection from "../../components/ListSelection/ListSelection";
import { postNewProfile } from "../../services/user";
import { getProfile } from "../profile/ProfileSlice";

const Register = () => {
  const { errors, values, handleChange, handleSubmit, handleMultiSelect, clearValues } =
    useForm(register);
  const authenticated = useSelector(selectAuth);
  const characterList = useSelector(selectList);
  const [showProfileSetup, setShowProfileSetup] = useState(false);
  const [saveProgress, setSaveProgress] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  function buildProfile(id) {
    const profile = showProfileSetup
      ? {
          refID: id,
          mainCharacter: values.mainCharacter,
          alternateCharacters: values.altCharacters,
        }
      : { refID: id };
    if (saveProgress) {
      //TODO:
      // logic to build customized profile for submission
      // const newProfile = await createNewProfile(profile);
    }
    return profile;
  }

  async function register() {
    const { setupPassword, confirmPassword, ...newUser } = values;
    newUser.password = setupPassword;
    const user = await postNewUser(newUser);
    if (user) {
      dispatch(setJWT(user.headers["x-auth-token"]));
      const newProfile = await buildProfile(user.data._id);
      const profile = await postNewProfile(newProfile);
      if (profile) {
        const headers = {
          userId: user.data._id,
          "Content-Type": "application/json",
          "x-auth-token": user.headers["x-auth-token"],
        };
        await dispatch(setHeaders(headers));
        await dispatch(getProfile(headers));
      }
      history.push("/profile");
    }
    clearValues();
  }

  return (
    !authenticated && (
      <div className="row">
        <div className="center" id="register-container">
          <div className="center full-box">
            <h6 className="text-center">Make an account to track your progress!</h6>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <span className="input-group-text">Username</span>
                <input
                  className="form-control"
                  type="text"
                  name="userName"
                  id="userName"
                  aria-describedby="userNameHelp"
                  value={values.userName || ""}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Email address</span>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="userEmail"
                  aria-describedby="emailHelp"
                  value={values.email || ""}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Password</span>
                <input
                  className="form-control"
                  type="password"
                  name="setupPassword"
                  id="setupPassword"
                  value={values.setupPassword || ""}
                  onChange={handleChange}
                  required={true}
                />
                <p className="errors">{errors.setupPassword ? `${errors.setupPassword}` : null}</p>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Retype Password</span>
                <input
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={values.confirmPassword || ""}
                  onChange={handleChange}
                  required={true}
                />
                <p className="errors">
                  {errors.confirmPassword ? `${errors.confirmPassword}` : null}
                </p>
              </div>
              <div className="text-center">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onChange={() => setShowProfileSetup(!showProfileSetup)}
                  />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Customize Profile
                  </label>
                </div>
                {showProfileSetup && (
                  <div className="">
                    <ListSelection
                      className="form-control"
                      listtype="One"
                      htmlFor="main-selector"
                      labeltext="Main Character"
                      name="mainCharacter"
                      id="main-selector"
                      data={characterList}
                      onChange={(e) => handleChange(e)}
                    />
                    <ListSelection
                      multiple
                      className="form-control"
                      listtype="Multiple"
                      htmlFor="alt-selector"
                      labeltext="Alternate Character(s)"
                      name="altCharacters"
                      id="alt-selector"
                      data={characterList}
                      onChange={(e) => handleMultiSelect(e)}
                    />{" "}
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onChange={() => setSaveProgress(!saveProgress)}
                      />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                        Save current progress
                      </label>
                    </div>
                  </div>
                )}

                <div className="form-input">
                  <button type="submit" className="btn btn-outline-light">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Register;
