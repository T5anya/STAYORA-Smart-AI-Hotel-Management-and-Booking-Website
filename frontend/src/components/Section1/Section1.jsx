import { useState, useEffect } from "react";
import "./Section1.css";
function Section1() {
  const searchHotels = () => {}
  return (
    <div className="section1" id="home">
      <div className="hero-content">
        <div className="hero-tag">✦ Find your perfect stay</div>

        <h1>
          Stay somewhere
          <br />
          worth remembering.
        </h1>

        <p>
          Discover beautiful hotels, comfortable rooms and unforgettable stays
          at destinations you'll love.
        </p>

        <div className="search-box">
          <div className="search-field">
            <label>DESTINATION</label>
            <input type="text" id="city" placeholder="Where are you going?" />
          </div>
          <div className="search-field">
            <label>CHECK-IN</label>
            <input type="date" id="checkin" />
          </div>
          <div className="search-field">
            <label>CHECK-OUT</label>
            <input type="date" id="checkout" />
          </div>

          <div className="search-field">
            <label>GUESTS</label>
            <select id="guests">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5+ Guests</option>
            </select>
          </div>

          <button className="searc-button" onClick={searchHotels}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
