import {useState, useEffect} from "react";
import "./Movingtext.css";


function Movingtext({text1, text2, text3}) {
    return (
    <section className="moving-section">
      <div className="moving-text">
        {/* First set */}
        <div className="moving-content">
          <h2>{text1}</h2>
          <span className="dot"></span>
          <h2>{text2}</h2>
          <span className="dot"></span>
          <h2>{text3}</h2>
          <span className="dot"></span>
        </div>
        {/* Duplicate set */}
        <div className="moving-content">
          <h2>{text1}</h2>
          <span className="dot"></span>
          <h2>{text2}</h2>
          <span className="dot"></span>
          <h2>{text3}</h2>
          <span className="dot"></span>
        </div>
      </div>
    </section>
    )
}
export default Movingtext;