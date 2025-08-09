import "../assets/css/tournament.css";
import Navigation from "../components/Navigation";
import Link from "next/link";

export default function Tournament() {
  return (
    <div>
      <Navigation activePage="tournament" />
      <h1>Bracket</h1>
      <section id="rounds">
        <p className="round">QF</p>
        <p className="round">SF</p>
        <p className="round">F</p>
      </section>
      {/* <!-- SF --> */}
      <section className="bracket">
        <div className="two">
          {/* <!-- SF1 --> */}
          <div className="bracket">
            <div className="two">
              <div className="player">Djokovic</div>
              <div className="player">Sinner</div>
            </div>
            {/* <!-- Finalist1 --> */}
            <div className="one">
              <div className="player">Djokovic</div>
            </div>
          </div>
          {/* <!-- SF2 --> */}
          <div className="bracket">
            <div className="two">
              <div className="player">Zverev</div>
              <div className="player">Alcaraz</div>
            </div>
            {/* <!-- Finalist2 --> */}
            <div className="one">
              <div className="player">Alcaraz</div>
            </div>
          </div>
        </div>
        {/* <!-- Winner --> */}
        <div className="one">
          <div className="player">Djokovic</div>
        </div>
      </section>
      <section id="other">
        <h1>Other Tournaments</h1>
        <div className="years">
          <p><Link href="/tournament_2024">Last Year</Link></p>
          <p>2025</p>
          <p>Next Year</p>
        </div>
      </section>
    </div>
  );
}
