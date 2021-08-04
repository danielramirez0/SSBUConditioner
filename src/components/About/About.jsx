import NavBar from "../NavBar/NavBar";
const AboutPage = () => {
  return (
    <div className="row h-100 w-100">
      <div className="col-2 nav-container">
        <NavBar />
      </div>
      <div className="col-10">
        <h1 className="text-center">About </h1>
        <h3 className="text-center">What it is:</h3>
        <p className="text-center">A poot attempt at something that has already been done.</p>
        <h5 className="text-center">What it is not:</h5>
        <p className="text-center">Usefull.</p>
        <h3 className="text-center">Developers:</h3>
        <p className="text-center">DanRezz</p>
        <h3 className="text-center">Sources:</h3>
        <p className="text-center">
          <a
            target="_blank"
            rel="noopener"
            href="https://docs.google.com/spreadsheets/d/16fmsoqDoQaR1eteVk2uuzIH2DB4iQHVrqiG8VRbRA7Q/"
          >
            Zapp Branniglenn's Google Sheet
          </a>
          <br />
          <a href="https://www.ssbwiki.com" target="_blank" rel="noopener">
            Smash Wiki
          </a>
          <br />
          <a target="_blank" rel="noopener" href="http://kuroganehammer.com">
            Kurogane Hammer
          </a>
          <br />
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
