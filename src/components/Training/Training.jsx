import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { Login } from "../../features/login/Login";
import { selectAuth, selectHeader } from "../../features/login/LoginSlice";
import Register from "../../features/register/Register";
import Trainers from "../../features/trainers/Trainers";
import { changeDisplayTab, selectDisplayTab } from "../../features/trainers/trainersSlice";
import "./Training.css";
import { selectProfile } from "../../features/profile/ProfileSlice";
import { putProfile } from "../../services/user";

const Training = () => {
  const authenticated = useSelector(selectAuth);
  const dispatch = useDispatch();
  const tabActive = useSelector(selectDisplayTab);
  const profile = useSelector(selectProfile);
  const headers = useSelector(selectHeader);

  function setTabSelected(num) {
    dispatch(changeDisplayTab(num));
  }

  function saveNewProfile() {
    const { status, ...newProfile } = profile;
    const { userId, ...header } = headers;
    putProfile(newProfile.refID, newProfile, header);
    alert("Profile saved");
  }

  return (
    <div className="row h-100 w-100">
      <div className="col-2 nav-container">
        <NavBar />
      </div>
      <div className="col">
        <div className="row m-auto w-fit">
          <Login />
        </div>
        {!authenticated && (
          <div className="row pt-4 pb-4">
            <div className="col">
              <Register />
            </div>
          </div>
        )}
        <div className="row">
          <div className="col m-auto">
            <nav className="navbar bg-transparent justify-content-center">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button
                    className={tabActive === 0 ? "nav-link active" : "nav-link"}
                    aria-current={tabActive === 0 ? "true" : "false"}
                    onClick={() => setTabSelected(0)}
                  >
                    Study Terms
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={tabActive === 1 ? "nav-link active" : "nav-link"}
                    aria-current={tabActive === 1 ? "true" : "false"}
                    onClick={() => setTabSelected(1)}
                  >
                    Study Inputs
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          {authenticated && (
            <div className="col-2 m-auto w-fit">
              <nav className="navbar bg-transparent justify-content-center me-0">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <button
                      className=" nav-item btn btn-dark fa fa-save"
                      onClick={() => saveNewProfile()}
                    ></button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
        <div className="row justify-content-center">
          <div className="col m-auto active-trainer">
            <Trainers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
