import { useEffect, useState } from "react";
import "./ImageSlider.css";

function ImageSlider({
  hotels,
  autoPlay = true,
  interval = 5000,
}) {
  const totalSlides = hotels.length;

  // Start at 1 because index 0 will be the cloned last slide
  const [currentIndex, setCurrentIndex] = useState(1);

  // Used when we need to temporarily disable transition
  const [enableTransition, setEnableTransition] = useState(true);

  // --------------------------------
  // NEXT SLIDE
  // --------------------------------

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // --------------------------------
  // PREVIOUS SLIDE
  // --------------------------------

  const previousSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // --------------------------------
  // AUTO PLAY
  // --------------------------------

  useEffect(() => {
    if (!autoPlay || totalSlides <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, totalSlides]);

  // --------------------------------
  // HANDLE INFINITE LOOP
  // --------------------------------

  const handleTransitionEnd = () => {

    // We reached cloned first slide
    if (currentIndex === totalSlides + 1) {

      setEnableTransition(false);

      setCurrentIndex(1);
    }

    // We reached cloned last slide
    if (currentIndex === 0) {

      setEnableTransition(false);

      setCurrentIndex(totalSlides);
    }
  };

  // --------------------------------
  // RE-ENABLE TRANSITION
  // --------------------------------

  useEffect(() => {

    if (!enableTransition) {

      // Small delay allows React to apply
      // the new position before animation
      const timer = requestAnimationFrame(() => {
        setEnableTransition(true);
      });

      return () => cancelAnimationFrame(timer);
    }

  }, [enableTransition]);

  // --------------------------------
  // EMPTY DATA
  // --------------------------------

  if (!hotels || hotels.length === 0) {
    return (
      <div className="empty-slider">
        No hotels available
      </div>
    );
  }

  // --------------------------------
  // CREATE CLONED SLIDES
  // --------------------------------

  const sliderHotels = [
    hotels[hotels.length - 1],
    ...hotels,
    hotels[0],
  ];

  return (
    <section className="image-slider">

      {/* Decorative circles */}

      <div className="slider-circle circle-one"></div>

      <div className="slider-circle circle-two"></div>


      {/* =========================
          SLIDES
      ========================= */}

      <div
        className="slides"
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translate3d(-${
            currentIndex * 100
          }%, 0, 0)`,

          transition: enableTransition
            ? "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)"
            : "none",
        }}
      >

        {sliderHotels.map((hotel, index) => (

          <article
            className="slide"
            key={`${hotel.id}-${index}`}
          >

            {/* =========================
                LEFT CONTENT
            ========================= */}

            <div className="slide-content">

              <div className="slide-top">

                <span className="hotel-badge">
                  {hotel.badge}
                </span>

                <span className="hotel-type">
                  {hotel.type}
                </span>

              </div>


              <h2>
                {hotel.name}
              </h2>


              <div className="location">

                <span>📍</span>

                <span>
                  {hotel.city}, {hotel.country}
                </span>

              </div>


              <div className="rating">

                <span className="star">
                  ★
                </span>

                <strong>
                  {hotel.rating}
                </strong>

                <span className="reviews">
                  ({hotel.reviews} reviews)
                </span>

              </div>


              <p className="description">
                {hotel.description}
              </p>


              {/* HOTEL DETAILS */}

              <div className="hotel-details">

                <div className="detail">

                  <span>
                    Starting from
                  </span>

                  <strong>
                    ₹
                    {hotel.price.toLocaleString(
                      "en-IN"
                    )}
                  </strong>

                  <small>
                    / night
                  </small>

                </div>


                <div className="vertical-line"></div>


                <div className="detail">

                  <span>
                    Guests
                  </span>

                  <strong>
                    {hotel.guests}
                  </strong>

                  <small>
                    people
                  </small>

                </div>

              </div>


              <button className="view-hotel">

                View Hotel

                <span>
                  →
                </span>

              </button>

            </div>


            {/* =========================
                IMAGE
            ========================= */}

            <div className="image-container">

              <img
                src={hotel.image}
                alt={hotel.name}
                loading={
                  index <= 1
                    ? "eager"
                    : "lazy"
                }
                decoding="async"
              />

              <div className="image-overlay"></div>

              <div className="image-label">

                📍 {hotel.city}

              </div>

            </div>

          </article>

        ))}

      </div>


      {/* =========================
          CONTROLS
      ========================= */}

      <div className="slider-controls">

        <button
          className="arrow"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          ←
        </button>


        <div className="dots">

          {hotels.map((hotel, index) => (

            <button
              key={hotel.id}
              className={`dot ${
                currentIndex === index + 1
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setCurrentIndex(index + 1)
              }
              aria-label={`Go to ${hotel.name}`}
            />

          ))}

        </div>


        <button
          className="arrow"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>

      </div>


      {/* =========================
          COUNTER
      ========================= */}

      <div className="counter">

        <span>
          {String(
            ((currentIndex - 1 + totalSlides) %
              totalSlides) + 1
          ).padStart(2, "0")}
        </span>

        <span className="counter-line"></span>

        <span>
          {String(totalSlides).padStart(2, "0")}
        </span>

      </div>

    </section>
  );
}

export default ImageSlider;