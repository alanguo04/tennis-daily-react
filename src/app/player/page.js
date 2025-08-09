import "../assets/css/player.css";
import Navigation from "../components/Navigation";

export default function Player() {
  return (
    <div>
      <Navigation activePage="player" />

      <h1>Novak Djokovic</h1>

      <div id="player">
        <div className="picture">
          <img src="/images/djokovic/headshot.png" alt="Novak Djokovic headshot" />
        </div>
        <div className="bio">
          <p>
            Novak Djokovic is a Serbian professional tennis player who is currently ranked world No. 1 in men&apos;s singles tennis by the Association of Tennis Professionals (ATP). 
            He has been ranked No. 1 for a record total of 400 weeks, and has finished as the year-end No. 1 a record eight times.
          </p>
          <p>
            Djokovic has won 24 Grand Slam men&apos;s singles titles, including a record ten Australian Open titles. 
            He has also won seven Wimbledon titles, four US Open titles, and three French Open titles, making him the first man in tennis history to achieve a triple Career Grand Slam.
          </p>
          <p>
            He has won 98 ATP singles titles, including a record 40 Masters 1000 titles, and has reached the final of all four Grand Slam tournaments at least once in a calendar year on three occasions.
          </p>
        </div>
      </div>

      <h2>Gallery</h2>
      <div id="gallery">
        <img src="/images/djokovic/djokovic1.jpg" alt="Novak Djokovic playing tennis" />
        <img src="/images/djokovic/djokovic2.jpg" alt="Novak Djokovic celebrating victory" />
        <img src="/images/djokovic/djokovic3.jpg" alt="Novak Djokovic at Wimbledon" />
        <img src="/images/djokovic/djokovic4.jpg" alt="Novak Djokovic serving" />
        <img src="/images/djokovic/djokovic5.jpg" alt="Novak Djokovic with trophy" />
      </div>
    </div>
  );
}
