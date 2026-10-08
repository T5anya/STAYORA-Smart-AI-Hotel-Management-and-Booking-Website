import { useEffect,  useState } from "react";
import "./Searchbox.css";

const cities = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Jaipur",
  "Udaipur",
  "Jodhpur",
  "Jaisalmer",
  "Agra",
  "Lucknow",
  "Varanasi",
  "Amritsar",
  "Chandigarh",
  "Goa",
  "Ahmedabad",
  "Surat",
  "Kochi",
  "Munnar",
  "Ooty",
  "Mysore",
  "Manali",
  "Shimla",
  "Rishikesh",
  "Dehradun",
  "Haridwar",
  "Mussoorie",
  "Nainital",
  "Srinagar",
  "Leh",
  "Darjeeling",
  "Gangtok",
  "Bhopal",
  "Indore",
  "Nashik",
  "Aurangabad",
  "Visakhapatnam",
  "Pondicherry",
];

const ratings = [
  "★★★★★ 5 Star",
  "★★★★ 4+ Star",
  "★★★ 3+ Star",
  "★★ 2+ Star",
  "★ 1+ Star",
];

const prices = [
  "₹500 – ₹1,000",
  "₹1,001 – ₹1,500",
  "₹1,501 – ₹2,000",
  "₹2,001 – ₹3,000",
  "₹3,001 – ₹4,000",
  "₹4,001 – ₹6,000",
  "₹6,001 – ₹8,000",
  "₹8,001 – ₹12,000",
  "₹12,000+",
];

const propertyTypes = [
  "Hotel",
  "Resort",
  "Villa",
  "Guest House",
  "Hostel",
];

function SearchBox() {
  const [city, setCity] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  const [guests, setGuests] = useState(2);

  const [openDropdown, setOpenDropdown] = useState(null);

  const [showFilters, setShowFilters] = useState(false);

  const [propertyType, setPropertyType] = useState("");

  const [citySearch, setCitySearch] = useState("");

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
        setCitySearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(
      openDropdown === name ? null : name
    );
  };

  const selectOption = (setter, value) => {
    setter(value);
    setOpenDropdown(null);
    setCitySearch("");
  };

  const filteredCities = cities.filter((item) =>
    item.toLowerCase().includes(citySearch.toLowerCase())
  );

  const increaseGuests = () => {
    if (guests < 10) {
      setGuests(guests + 1);
    }
  };

  const decreaseGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const resetFilters = () => {
    setCity("");
    setRating("");
    setPrice("");
    setGuests(2);
    setPropertyType("");
  };

  const handleSearch = () => {
    const searchData = {
      city,
      rating,
      price,
      guests,
      propertyType,
    };

    console.log("Stayora Search:", searchData);

    // Later:
    // fetch("/api/hotels?...")
  };

  return (
    <section
      className="stayora-search"
      id="Search"
    >
      {/* Heading */}

      <div className="search-intro">
        <span>DISCOVER YOUR STAY</span>

        <h2>
          Find a place that
          <em> feels like home.</em>
        </h2>

        <p>
          Discover beautiful stays and unforgettable
          experiences across India.
        </p>
      </div>

      {/* SEARCH BOX */}

      <div className="search-box">

        {/* CITY */}

        <div
          className={`search-field ${
            openDropdown === "city"
              ? "field-active"
              : ""
          }`}
        >
          <button
            className="field-button"
            onClick={() =>
              toggleDropdown("city")
            }
          >
            <span className="field-icon">⌖</span>

            <span className="field-info">
              <small>City</small>

              <strong>
                {city || "Where are you going?"}
              </strong>
            </span>

            <span className="arrow">
              {openDropdown === "city"
                ? "⌃"
                : "⌄"}
            </span>
          </button>

          {/* CITY DROPDOWN */}

          <div
            className={`dropdown ${
              openDropdown === "city"
                ? "dropdown-visible"
                : ""
            }`}
          >
            <div className="dropdown-title">
              <span>Choose a destination</span>
            </div>

            <div className="dropdown-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search city..."
                value={citySearch}
                onChange={(e) =>
                  setCitySearch(e.target.value)
                }
                onClick={(e) =>
                  e.stopPropagation()
                }
              />
            </div>

            <div className="dropdown-list">

              {filteredCities.map(
                (item, index) => (
                  <button
                    key={item}
                    className={`dropdown-item ${
                      city === item
                        ? "item-selected"
                        : ""
                    }`}
                    style={{
                      "--item-index": index,
                    }}
                    onClick={() =>
                      selectOption(
                        setCity,
                        item
                      )
                    }
                  >
                    <span className="item-icon">
                      ⌖
                    </span>

                    <span>{item}</span>

                    {city === item && (
                      <span className="check">
                        ✓
                      </span>
                    )}
                  </button>
                )
              )}

              {filteredCities.length === 0 && (
                <div className="no-result">
                  No city found
                </div>
              )}

            </div>
          </div>
        </div>

        {/* RATING */}

        <div
          className={`search-field ${
            openDropdown === "rating"
              ? "field-active"
              : ""
          }`}
        >
          <button
            className="field-button"
            onClick={() =>
              toggleDropdown("rating")
            }
          >
            <span className="field-icon star">
              ★
            </span>

            <span className="field-info">
              <small>Rating</small>

              <strong>
                {rating || "Any rating"}
              </strong>
            </span>

            <span className="arrow">
              {openDropdown === "rating"
                ? "⌃"
                : "⌄"}
            </span>
          </button>

          <div
            className={`dropdown small-dropdown ${
              openDropdown === "rating"
                ? "dropdown-visible"
                : ""
            }`}
          >
            {ratings.map((item, index) => (
              <button
                key={item}
                className={`dropdown-item rating-item ${
                  rating === item
                    ? "item-selected"
                    : ""
                }`}
                style={{
                  "--item-index": index,
                }}
                onClick={() =>
                  selectOption(
                    setRating,
                    item
                  )
                }
              >
                <span>{item}</span>

                {rating === item && (
                  <span className="check">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* PRICE */}

        <div
          className={`search-field ${
            openDropdown === "price"
              ? "field-active"
              : ""
          }`}
        >
          <button
            className="field-button"
            onClick={() =>
              toggleDropdown("price")
            }
          >
            <span className="field-icon">
              ₹
            </span>

            <span className="field-info">
              <small>Price</small>

              <strong>
                {price || "Any price"}
              </strong>
            </span>

            <span className="arrow">
              {openDropdown === "price"
                ? "⌃"
                : "⌄"}
            </span>
          </button>

          <div
            className={`dropdown small-dropdown ${
              openDropdown === "price"
                ? "dropdown-visible"
                : ""
            }`}
          >
            {prices.map((item, index) => (
              <button
                key={item}
                className={`dropdown-item ${
                  price === item
                    ? "item-selected"
                    : ""
                }`}
                style={{
                  "--item-index": index,
                }}
                onClick={() =>
                  selectOption(
                    setPrice,
                    item
                  )
                }
              >
                <span>{item}</span>

                {price === item && (
                  <span className="check">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* GUESTS */}

        <div className="search-field guests-field">

          <div className="field-button guests-button">

            <span className="field-icon">
              ♙
            </span>

            <span className="field-info">
              <small>Guests</small>

              <strong>
                {guests}{" "}
                {guests === 1
                  ? "Guest"
                  : "Guests"}
              </strong>
            </span>

            <div className="guest-controls">

              <button
                onClick={decreaseGuests}
                disabled={guests === 1}
              >
                −
              </button>

              <span>{guests}</span>

              <button
                onClick={increaseGuests}
                disabled={guests === 10}
              >
                +
              </button>

            </div>

          </div>

        </div>

        {/* FILTER BUTTON */}

        <button
          className={`filter-btn ${
            showFilters ? "filter-active" : ""
          }`}
          onClick={() =>
            setShowFilters(!showFilters)
          }
        >
          <span>☷</span>
          Filters
        </button>

        {/* SEARCH */}

        <button
          className="search-btn"
          onClick={handleSearch}
        >
          Search
          <span>→</span>
        </button>

      </div>

      {/* FILTER PANEL */}

      <div
        className={`filter-panel ${
          showFilters
            ? "filter-panel-visible"
            : ""
        }`}
      >
        <div className="filter-panel-inner">

          <div className="filter-panel-heading">
            <div>
              <span>REFINE YOUR SEARCH</span>

              <h3>
                Make it exactly your kind
                of stay.
              </h3>
            </div>

            <button
              onClick={resetFilters}
            >
              Reset
            </button>
          </div>

          <div className="property-section">

            <label>
              Property Type
            </label>

            <div className="property-options">

              {propertyTypes.map(
                (type) => (
                  <button
                    key={type}
                    className={
                      propertyType === type
                        ? "property-selected"
                        : ""
                    }
                    onClick={() =>
                      setPropertyType(
                        propertyType === type
                          ? ""
                          : type
                      )
                    }
                  >
                    {type}
                  </button>
                )
              )}

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default SearchBox;