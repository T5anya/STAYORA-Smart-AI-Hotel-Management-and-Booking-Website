
import React, { useEffect,useRef } from "react";
import "./Features.css";

const features = [
  {
    icon: "🏨",
    title: "Smart Hotel Discovery",
    text: "Discover hotels based on destination, rating, price and guest requirements."
  },
  {
    icon: "🔎",
    title: "Advanced Search",
    text: "Find your perfect stay using simple and useful filters designed for faster searching."
  },
  {
    icon: "🛏️",
    title: "Easy Room Booking",
    text: "Explore available rooms, compare options and complete your booking with ease."
  },
  {
    icon: "❤️",
    title: "Save Favorites",
    text: "Keep your favorite hotels saved so you can easily come back to them later."
  },
  {
    icon: "👥",
    title: "Group Booking",
    text: "Plan stays for families, friends and larger groups with convenient group booking."
  },
  {
    icon: "🍽️",
    title: "Restaurant & Room Service",
    text: "Order food directly from your hotel and manage restaurant and room-service requests."
  },
  {
    icon: "📊",
    title: "Hotel Management",
    text: "Hotel administrators can manage rooms, bookings, guests, food services and operations."
  },
  {
    icon: "💳",
    title: "Secure Payments",
    text: "A smooth payment workflow makes completing your hotel reservation simple."
  },
  {
    icon: "📈",
    title: "Analytics Dashboard",
    text: "Hotel owners can monitor bookings, revenue, occupancy and important business insights."
  },
  {
    icon: "🔔",
    title: "Booking Updates",
    text: "Stay informed about booking confirmations, cancellations and important updates."
  }
];

function Features() {
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }});},
      {
        threshold: 0.15
      }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="features-page" id="feature">
      {/* HERO */}
      <div className="features-hero">
        <div className="hero-decoration"></div>

        <p className="small-heading">THE STAYORA EXPERIENCE</p>

        <h1>
          Everything You Need
          <span> For A Better Stay.</span>
        </h1>
        <p className="hero-description">
          From discovering the perfect hotel to managing your entire stay,
          Stayora brings everything together in one seamless experience.
        </p>
        <a href="#features" className="explore-btn">
          Explore Features
          <span>↓</span>
        </a>
      </div>

      {/* FEATURES */}
      <div className="features-section" id="features">
        <div className="section-heading">
          <p>WHY STAYORA</p>
          <h2>
            Designed Around
            <span> Your Journey</span>
          </h2>
          <div className="heading-line"></div>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
              style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="feature-number">
                0{index + 1}
              </div>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <div className="card-arrow">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
