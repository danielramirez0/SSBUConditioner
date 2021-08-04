// import RS from "../../img/ButtonIcon-GCN-Control_Stick-R-S.svg";
// import LS from "../../img/ButtonIcon-GCN-Control_Stick-L-S.svg";
import { useDispatch, useSelector } from "react-redux";
// import { selectHeader } from "../login/LoginSlice";
import {
  // selectProfile,
  selectProfileTechProgress,
  selectProfileTermProgress,
  setGeneralKnowledgeProgress,
  setGereralTechniqueProgress,
} from "../profile/ProfileSlice";

const TrainerListItem = (props) => {
  const dispatch = useDispatch();
  const profileTermProgress = useSelector(selectProfileTermProgress);
  const profileTechProgress = useSelector(selectProfileTechProgress);
  // const profile = useSelector(selectProfile);
  // const headers = useSelector(selectHeader);

  function handleClick(id, mode) {
    if (mode === "Terms") {
      if (profileTermProgress) {
        // const { status, ...newProfile } = profile;
        // const { userId, ...header } = headers;
        const newArray = [...profileTermProgress, id];
        dispatch(setGeneralKnowledgeProgress(newArray));
      }
    }
    if (mode === "Techs") {
      if (profileTechProgress) {
        const newArray = [...profileTechProgress, id];
        dispatch(setGereralTechniqueProgress(newArray));
      }
    }
  }
  return (
    <>
      <div className="col">
        {props.col1}
        {/* <a id={props.col1} /> */}
      </div>
      {props.mode === "Terms" ? (
        <div className="col">{props.col2}</div>
      ) : (
        <div className="col">{`${props.col2}`}</div>
      )}
      <div className="col">
        {props.disableButton === true ? (
          <></>
        ) : props.complete === false ? (
          <>
            <button
              name={props.id || ""}
              value={props.id || ""}
              type="button"
              className="btn btn-outline-secondary"
              id={`${props.id}`}
              onClick={() => handleClick(props.id, props.mode)}
            >
              &#10003;
            </button>
            {/* <label className="btn btn-outline-success" htmlFor={`${props.id}`}>
              Mark Complete
            </label> */}
          </>
        ) : (
          <>
            <button
              checked
              disabled
              name={props.id || ""}
              value={props.id || ""}
              type="checkbox"
              className="btn btn-success"
              id={`${props.id}`}
            >
              &#10003;
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default TrainerListItem;
