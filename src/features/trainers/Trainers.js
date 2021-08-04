import { useSelector } from "react-redux";
import TrainerListItem from "./trainerListItem";
import { selectDisplayTab, selectTechs, selectTerms } from "./trainersSlice";
import { selectProfileTechProgress, selectProfileTermProgress } from "../profile/ProfileSlice";
import { selectAuth } from "../login/LoginSlice";
import "./trainers.css";

const Trainers = () => {
  const authenticated = useSelector(selectAuth);
  const displayTab = useSelector(selectDisplayTab);
  const terms = useSelector(selectTerms);
  const techs = useSelector(selectTechs);
  const displayArray = displayTab === 0 ? terms : techs;
  const profileTermProgress = useSelector(selectProfileTermProgress);
  const profileTechProgress = useSelector(selectProfileTechProgress);

  function checkTermProgress(id) {
    if (profileTermProgress) {
      return profileTermProgress.includes(id);
    } else {
      return false;
    }
  }

  function checkTechProgress(id) {
    if (profileTechProgress) {
      return profileTechProgress.includes(id);
    } else {
      return false;
    }
  }

  return authenticated ? (
    <div className="row training-item scroll-y-50r">
      {displayArray.map((item) => (
        <div key={item._id} className="row training-item">
          {displayTab === 0 ? (
            <TrainerListItem
              mode="Terms"
              col1={item.term}
              col2={item.definition}
              id={item._id}
              complete={checkTermProgress(item._id)}
            />
          ) : (
            <TrainerListItem
              mode="Techs"
              col1={item.tech}
              col2={item.input}
              id={item._id}
              complete={checkTechProgress(item._id)}
            />
          )}
        </div>
      ))}
    </div>
  ) : (
    <div className="col">
      {displayArray.map((item) => (
        <div key={item._id} className="row training-item">
          {displayTab === 0 ? (
            <TrainerListItem
              mode="Terms"
              col1={item.term}
              col2={item.definition}
              id={item._id}
              disableButton={true}
            />
          ) : (
            <TrainerListItem
              mode="Techs"
              col1={item.tech}
              col2={item.input}
              id={item._id}
              disableButton={true}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Trainers;
