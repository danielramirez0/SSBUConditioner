import { useDispatch, useSelector } from "react-redux";
import { selectHeader } from "../../features/login/LoginSlice";
import {
  goalToggled,
  selectGoals,
  selectProfile,
  updateGoals,
} from "../../features/profile/ProfileSlice";
import { putProfile } from "../../services/user";
import useForm from "../useForm/useForm";
import "./Goals.css";

const Goals = () => {
  const goals = useSelector(selectGoals);
  const profile = useSelector(selectProfile);
  const headers = useSelector(selectHeader);
  const { values, handleChange, handleSubmit, clearValues } = useForm(addGoal);
  const dispatch = useDispatch();

  function addGoal() {
    const newGoal = { ...values, completed: false, color: "" };
    const newGoals = goals ? [...goals, newGoal] : [newGoal];
    clearValues();
    dispatch(updateGoals(newGoals));
  }

  function toggleGoal(id) {
    dispatch(goalToggled(id));
  }

  //   function completeGoal(goal) {
  //     const completedGoal = { ...goal, completed: true };
  //     const updatedGoals = [...goals, completedGoal];
  //     clearValues();
  //     dispatch(updateGoals(updatedGoals));
  //   }

  //   function uncompleteGoal(goal) {
  //     const completedGoal = { ...goal, completed: false };
  //     const updatedGoals = [...goals, completedGoal];
  //     clearValues();
  //     dispatch(updateGoals(updatedGoals));
  //   }

  function removeGoal(indx) {
    const goalsCopy = [...goals];
    const newGoals = goalsCopy.filter((item) => {
      return goals[indx] !== item;
    });
    dispatch(updateGoals(newGoals));
  }

  function saveToProfile() {
    const { userId, ...header } = headers;
    const { status, ...newProfile } = profile;
    putProfile(newProfile.refID, newProfile, header);
    alert("Changes saved");
  }

  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col">
        <div className="row mt-2">
          <div className="col-8">
            <input
              className="form-control"
              placeholder="Add some goals!"
              name="text"
              value={values.text || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-secondary mb-3">
              &#8617;
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-dark fa fa-save mb-3"
              onClick={() => saveToProfile()}
            ></button>
          </div>
        </div>
        <div className="row me-4">
          <div className="col-8">
            <h4>Current Goals</h4>
          </div>
          <div className="col-2">
            <h5 className="">Status</h5>
          </div>
          <div className="col-2">
            <h5 className="">Delete</h5>
          </div>
        </div>
        <div className="row goals-list mb-2">
          {goals
            ? goals.length > 0
              ? goals.map((goal, index) => (
                  <div key={index} className="row row-cols-3">
                    <div className="col-8">
                      <p className="goal">{goal.text}</p>
                    </div>
                    <div className="col-2">
                      {goal.completed ? (
                        <button
                          key={`${index}-complete`}
                          type="button"
                          onClick={() => toggleGoal(goal._id)}
                          className="btn btn-success"
                        >
                          &#10003;
                        </button>
                      ) : (
                        <button
                          key={`${index}-incomplete`}
                          type="button"
                          onClick={() => removeGoal(index)}
                          className="btn btn-outline-success"
                        >
                          &#10003;
                        </button>
                      )}
                    </div>
                    <div className="col-2">
                      <button
                        key={`${index}-delete`}
                        type="button"
                        onClick={() => removeGoal(index)}
                        className="btn btn-outline-secondary fa fa-close"
                      />
                    </div>
                  </div>
                ))
              : null
            : null}
        </div>
      </form>
    </div>
  );
};

export default Goals;
