import { useHistory } from "react-router-dom";
import useForm from "../../components/useForm/useForm";
import { useSelector, useDispatch } from "react-redux";
import { setJWT, logout, selectAuth, setHeaders, setUser } from "./LoginSlice";
import { testCredentials } from "../../services/user";
import jwtDecode from "jwt-decode";
import { getProfile } from "../profile/ProfileSlice";

export function Login() {
  const authenticated = useSelector(selectAuth);
  const { values, handleChange, handleSubmit, clearValues } = useForm(login);
  const dispatch = useDispatch();
  const history = useHistory();

  async function login() {
    const passed = await testCredentials(values);
    if (passed) {
      localStorage.setItem("token", passed);
      const user = jwtDecode(passed);
      const headers = {
        userId: user._id,
        "Content-Type": "application/json",
        "x-auth-token": passed,
      };
      await dispatch(setHeaders(headers));
      await dispatch(getProfile(headers));
      await dispatch(setUser(user));
      await dispatch(setJWT(values));
      clearValues();
      history.push("/profile");
    }
  }

  function logoff() {
    dispatch(logout());
    history.push("/");
  }

  return !authenticated ? (
    <form className="row" onSubmit={handleSubmit}>
      <div className="col p-0">
        <label htmlFor="emailAddress" className="visually-hidden">
          Email
        </label>
        <input
          className="form-control"
          type="email"
          name="email"
          id="emailAddress"
          aria-describedby="emailHelp"
          value={values.email || ""}
          onChange={handleChange}
          require="true"
          placeholder="email"
        />
      </div>
      <div className="col p-0">
        <label htmlFor="inputPassword" className="visually-hidden">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          name="password"
          id="inputPassword"
          value={values.password || ""}
          onChange={handleChange}
          require="true"
          placeholder="Password"
        />
      </div>
      <div className="col p-0">
        <button type="submit" className="btn btn-secondary">
          Sign In
        </button>
      </div>
    </form>
  ) : (
    !authenticated || (
      <div className="col">
        <button type="button" className="btn btn-outline-secondary mb-3" onClick={() => logoff()}>
          Logout
        </button>
      </div>
    )
  );
}
