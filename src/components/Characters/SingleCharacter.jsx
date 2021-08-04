import "./Characters.css";

const SingleCharacter = (props) => {
  return (
    <div className="col">
      <div className="row justify-content-center">
        <div className="col">
          {props.activeCharacter !== undefined ? (
            <>
              <div className="row">
                <div className="col ">
                  <img
                    className="stat-container"
                    src={props.activeCharacter.MainImageUrl}
                    alt="Fox"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col stat-container">
                  <div className="row">
                    <h6>MOVEMENT</h6>
                  </div>
                  <div className="row">
                    <div className="col">Jumps</div>
                    <div className="col">{props.activeCharacter.movement.jumps}</div>
                  </div>
                  <div className="row">
                    <div className="col">Crouch Walk</div>
                    <div className="col">
                      {props.activeCharacter.movement.crouchWalk ? "Yes" : "No"}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">Tether</div>
                    <div className="col">
                      {props.activeCharacter.movement.tether ? "Yes" : "No"}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">Wall Jump</div>
                    <div className="col">
                      {props.activeCharacter.movement.wallJump ? "Yes" : "No"}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">Wall Cling</div>
                    <div className="col">
                      {props.activeCharacter.movement.wallCling ? "Yes" : "No"}
                    </div>
                  </div>
                </div>
                <div className="col stat-container">
                  <div className="row">
                    <h6>OUT OF SHIELD OPTIONS</h6>
                  </div>
                  <div className="row">
                    <div className="row">
                      <div className="col">
                        <h6>OPTION</h6>
                      </div>
                      <div className="col">
                        <h6>FRAME DATA</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">UP B</div>
                      <div className="col">{props.activeCharacter.attributes.OOS.upB}</div>
                    </div>
                    <div className="row">
                      <div className="col">NAIR</div>
                      <div className="col">{props.activeCharacter.attributes.OOS.nair}</div>
                    </div>
                    <div className="row">
                      <div className="col">UAIR</div>
                      <div className="col">{props.activeCharacter.attributes.OOS.uair}</div>
                    </div>
                  </div>
                </div>
                <div className="col stat-container">
                  <div className="row">
                    <h6>ATTRIBUTES</h6>
                  </div>
                  <div className="row">
                    <div className="col">Weight</div>
                    <div className="col">{props.activeCharacter.attributes.weight}</div>
                  </div>
                  <div className="row">
                    <div className="col">Gravity</div>
                    <div className="col">{props.activeCharacter.attributes.gravity}</div>
                  </div>
                  <div className="row">
                    <div className="col">Walk Speed</div>
                    <div className="col">{props.activeCharacter.attributes.walkSpeed}</div>
                  </div>
                  <div className="row">
                    <div className="col">Run Speed</div>
                    <div className="col">{props.activeCharacter.attributes.runSpeed}</div>
                  </div>
                  <div className="row">
                    <div className="col">Initial Dash</div>
                    <div className="col">{props.activeCharacter.attributes.initialDash}</div>
                  </div>
                  <div className="row">
                    <div className="col">Air Speed</div>
                    <div className="col">{props.activeCharacter.attributes.airSpeed}</div>
                  </div>
                  <div className="row">
                    <div className="col">Air Acceleration</div>
                    <div className="col">{props.activeCharacter.attributes.airAcceleration}</div>
                  </div>
                  <div className="row">
                    <div className="col">Fall Speed</div>
                    <div className="col">{props.activeCharacter.attributes.fallSpeed}</div>
                  </div>
                  <div className="row">
                    <div className="col">Fast Fall Speed</div>
                    <div className="col">{props.activeCharacter.attributes.fastFallSpeed}</div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
          <button
            type="button"
            className="btn btn-outline-light fa fa-refresh"
            onClick={props.toggleShowOne}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;
