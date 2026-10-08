import React, { useEffect, useRef } from "react";
import "./Aboutpage.css";
import useScrollReveal from "../../hooks/useScrollReveal";

const features = [
  {
    icon: "🏨",
    title: "Handpicked Stays",
    text: "Discover carefully selected hotels designed to make every stay comfortable and memorable.",
  },
  {
    icon: "🔐",
    title: "Secure Booking",
    text: "Your booking experience is designed with simplicity, reliability and security in mind.",
  },
  {
    icon: "✨",
    title: "Personalized Experience",
    text: "Find stays that match your preferences, budget and travel style.",
  },
  {
    icon: "🍽️",
    title: "Complete Hospitality",
    text: "From rooms to dining and room service, Stayora connects your entire hotel experience.",
  },
];

const stats = [
  { number: "40+", label: "Cities" },
  { number: "1K+", label: "Hotels" },
  { number: "50K+", label: "Guests" },
  { number: "24/7", label: "Support" },
];

const experiences = [
  {
    number: "01",
    title: "Discover",
    text: "Explore hotels, compare stays and discover destinations that match your plans.",
  },
  {
    number: "02",
    title: "Choose",
    text: "Use simple filters for city, rating, price and guests to find the right stay.",
  },
  {
    number: "03",
    title: "Book",
    text: "Select your room and complete your reservation through a smooth booking journey.",
  },
  {
    number: "04",
    title: "Experience",
    text: "Enjoy your stay with hotel services, dining and room-service options.",
  },
];

function About() {
  const pageRef = useScrollReveal();

  return (
    <main className="about-page" ref={pageRef} id="about">

      {/* ================= FEATURES ================= */}

      <section className="aboutsection">
        <div className="section-heading reveal">
          <span className="section-label">THE STAYORA DIFFERENCE</span>
          <h2>
            More than a
            <em> booking.</em>
          </h2>
          <p>
            Everything you need for a smoother and more meaningful hotel
            experience.
          </p>
        </div>
        <div className="featuregrid">
          {features.map((feature, index) => (
            <article
              className="feature-card reveal"
              key={feature.title}
              style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <span className="feature-number">
                0{index + 1}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <div className="card-arrow">
                →
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* ================= STATS ================= */}

      <section className="stats-section">
        <div className="stats-intro reveal">
          <span className="section-label">
            STAYORA IN NUMBERS
          </span>
          <h2>
            Growing with
            <br />
            <em>every journey.</em>
          </h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              className="stat reveal"
              key={stat.label}
              style={{ transitionDelay: `${index * 100}ms` }}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section className="experience-section">
        <div className="experience-heading reveal">
          <span className="section-label">
            YOUR JOURNEY
          </span>
          <h2>
            From search to
            <br />
            <em>stay.</em>
          </h2>
        </div>
        <div className="experience-list">
          {experiences.map((item, index) => (
            <div
              className="experience-item reveal"
              key={item.number}
              style={{ transitionDelay: `${index * 100}ms` }}>
              <span className="experience-number">
                {item.number}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <span className="experience-arrow">
                ↗
              </span>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

export default About;