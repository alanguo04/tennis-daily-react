import "../assets/css/tournament.css";
import Navigation from "../components/Navigation";

export default function Tournament2024() {
  return (
    <div>
      <Navigation activePage="tournament" />

      <h1>Bracket</h1>


    <section id="rounds">
        <p class="round">QF</p>
        <p class="round">SF</p>
        <p class="round">F</p>
    </section>


{/* <!-- SF --> */}
    <section class="bracket">
        

        <div class="two">
                {/* <!-- SF1 --> */}
            <div class="bracket">
                <div class="two">
                    <div class="player">
                        Djokovic
                    </div>

                    <div class="player">
                        Sinner
                    </div>
                </div>

                {/* <!-- Finalist1 --> */}
                <div class="one">
                    <div class="player">
                        Djokovic
                    </div>
                </div>
            </div>


            {/* <!-- SF2 --> */}
            <div class="bracket">
                <div class="two">
                    <div class="player">
                        Zverev
                    </div>

                    <div class="player">
                        Alcaraz
                    </div>
                </div>

                {/* <!-- Finalist2 --> */}
                <div class="one">
                    <div class="player">
                        Alcaraz
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Winner --> */}
        <div class="one">
            <div class="player">
                Djokovic
            </div>
        </div>
    </section>

    <section id="other">
        <h1>Other Tournaments</h1>

        <div class="years">
            <p>Past Year</p>
            <p>2025</p>
            <p><a href="tournament.html">Next Year</a></p>
        </div>
    </section>
    </div>
  );
}
