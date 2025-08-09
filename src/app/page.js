"use client";
import Image from "next/image";
import "./assets/css/main.css";
import Navigation from "./components/Navigation";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navigation activePage="home" />
      <motion.h1
        animate={{
          x: ["0%", "5%", "-5%", "0%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        Tennis Daily
      </motion.h1>
      <h2>Tournaments</h2>
      <section id="tournaments">
        <Link className="tournament" href="/tournament">Wimbledon</Link>
      </section>
      <h2>Latest News</h2>
      <section id="news">
        <article className="article">
          <h3>Sinner Beats Djokovic to Advance to Final</h3>
          <a target="_blank" href="https://www.aljazeera.com/sports/2025/7/11/sinner-beats-djokovic-to-set-up-wimbledon-final-against-alcaraz">
            <img src="/images/sinnernews.jpg" alt="Image of Jannik Sinner with grin holding racket up" />
          </a>
        </article>
        <article className="article">
          <h3>Wimbledon Tournament Updates</h3>
          <a target="_blank" href="https://www.independent.co.uk/topic/wimbledon">
            <img src="/images/alcaraznews.img" alt="Image of Carlos Alcarz with mouth open with yell pumping fists" />
          </a>
        </article>
        <article className="article">
          <h3>Women&apos;s Singles Finalists Announced</h3>
          <a target="_blank" href="https://www.cnn.com/sport/live-news/wimbledon-semifinals-womens-spt">
            <img src="/images/womens.jpg" alt="Picture of ladies' singles finalists Anisimova and Swiatek" />
          </a>
        </article>
      </section>
    </div>
  );
}
