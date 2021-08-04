import { Login } from "../../features/login/Login";
import NavBar from "../NavBar/NavBar";
import "./Welcome.css";
import gamer from "../../img/competitive.jpg";
import ryuKen from "../../img/ryuKen.jpg";
import marioPeachLuigi from "../../img/mario-peach-luigi.jpg";
import ssbuPanoramic from "../../img/SSBU_Panoramic.png";

const Welcome = () => {
  return (
    <div className="row h-100 w-100">
      <div className="col-2 nav-container">
        <NavBar />
      </div>
      <div className="col justify-content-center">
        <div className="row m-auto w-fit">
          <div className="col">
            <Login />
          </div>
        </div>
        <div className="row">
          <div className="col pb-4">
            <h1>SMASH ULTIMATE CONDITIONER </h1>
          </div>
        </div>
        <div className="row m-auto w-fit pb-4">
          <div className="col">
            <div className="card text-white bg-dark mb-3">
              <img src={gamer} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Level up!</h5>
                <p className="card-text">
                  Familiarize yourself with key terms used in everyday SMASH discussions
                </p>
                <a href="http://localhost:3000/training" className="btn btn-outline-secondary">
                  Go Learn!
                </a>
                <div className="credit pt-2">
                  Photo by{" "}
                  <a href="https://unsplash.com/@florianolv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Florian Olivo
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/s/photos/gamer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-white bg-dark mb-3">
              <img src={ryuKen} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Learn Matchups!</h5>
                <p className="card-text">
                  Compare move-sets, stats, tier-ranking and more between two characters.
                </p>
                <a
                  href="http://localhost:3000/matchup-analyzer"
                  className="btn btn-outline-secondary"
                >
                  Go Compare!
                </a>
                <div className="credit pt-2">
                  Photo by{" "}
                  <a href="https://unsplash.com/@ryanquintal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Ryan Quintal
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/s/photos/smash-brothers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-white bg-dark mb-3">
              <img src={marioPeachLuigi} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Study Characters!</h5>
                <p className="card-text">
                  See the list of available characters. Study their stats, moves, tech, and find
                  additional resources.
                </p>
                <a href="http://localhost:3000/characters" className="btn btn-outline-secondary">
                  Go Study!
                </a>
                <div className="credit pt-2">
                  Photo by{" "}
                  <a href="https://unsplash.com/@ryanquintal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Ryan Quintal
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/s/photos/smash-brothers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-auto w-fit">
          <div className="col image-container">
            <img
              className="background-image"
              src={ssbuPanoramic}
              alt="Panoramic of all characters"
            />
            <div className="credit pt-2">
              <label htmlFor="ssbuwiki" style={{ color: "white" }}>
                Photo by
              </label>{" "}
              <a id="ssbuwiki" href="https://www.ssbwiki.com/index.php?curid=86088">
                SSBwiki
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
