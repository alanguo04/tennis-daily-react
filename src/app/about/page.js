import "../assets/css/about.css";
import Navigation from "../components/Navigation";

export default function About() {
  return (
    <div>
      <Navigation activePage="about" />

      <h1>About Tennis Daily</h1>

      <div id="container">
        <img src="/images/atptour1.png" alt="ATP Tour logo" />
        <div className="description">
          <h2>Our Mission</h2>
          <p>
            Tennis Daily is dedicated to bringing you the latest news, tournament updates, and player profiles from the world of professional tennis. 
            We cover all major tournaments including the Grand Slams, ATP Tour, and WTA Tour events.
          </p>
        </div>
        <img src="/images/atptour2.jpg" alt="Tennis court" />
      </div>

      <h2>Contact Us</h2>
      <div id="contact">
        <p>Email: info@tennisdaily.com</p>
        <p>Phone: (555) 123-4567</p>
        <p>Address: 123 Tennis Court, Wimbledon, London, UK</p>
      </div>
    </div>
  );
}
