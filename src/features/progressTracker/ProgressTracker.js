import "./progressTracker.css";
const ProgressTracker = (props) => {
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <h4 className="title">{props.title}</h4>
        </div>
        {props.listData.map((element, index) => (
          <div key={index} className="row row-cols-2 justify-content-center">
            <div className="col-2 ">
              <a
                type="button"
                className="btn btn-success h-10"
                href={`http://localhost:3000/training/${element.term || element.tech}`}
              >
                &#8594;
              </a>
            </div>
            <div className="col ">
              <p>{element.term || element.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
