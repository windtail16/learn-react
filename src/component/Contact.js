export default function Contact() {
  return (
    <div className="contact-bg text-center" id="contact">
      <div className="contact spacer">
        <div className="container">
        <h2>Contact</h2>
          <p>I am available for Freelancing work and collaboration.</p>
          <hr className="transparent" />
          <div className="row justify-content-md-center">
            <div className="col-lg-2 col">
              <a href="mailto:windtail16@naver.com" target="noreferrer">
                <i className="far fa-envelope fa-3x"></i>
                <p>email</p>
              </a>
            </div>
            <div className="col-lg-2 col">
              <a href="https://www.instagram.com/windtail16/" target="noreferrer">
                <i className="fab fa-instagram fa-3x"></i>
                <p>Instaram</p>
              </a>
            </div>
            <div className="col-lg-2 col">
              <a href="https://www.strava.com/athletes/windtail16" target="noreferrer">
                <i className="fab fa-strava fa-3x"></i>
                <p>Strava</p>
              </a>
            </div>
            <div className="col-lg-2 col d-none">
              <a href="https://github.com/windtail16" target="noreferrer">
                <i className="fab fa-github fa-3x"></i>
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}