import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Info from "../information/info";
import "./Homepage.scss";

const Homepage = () => {
    const navigate=useNavigate();
  return (
    <div className="web">
    <div
      className="Homepage-container"
      style={{
        backgroundImage: `url("https://purpletoko.in/wp-content/uploads/2022/01/1641639955250.png")`,
      }}
    >
      <div className="Homepage">
        <div className="Header">
          <Header />
        </div>
        <div className="Content-container">
          <div className="Content">
            <h1>
              <span>
                <b>PANKAJ </b>
              </span>
              <span style={{ color: "purple" }}>
                <b>TOKO</b>
              </span>
            </h1>
          </div>
          <div className="Inner-content">
            <h3>
              <span>Digitizing</span> <span>Retail</span>
            </h3>
          </div>
          <div className="Button">
            <button className="button" onClick={()=>navigate('/signin')}>
            <span className="text">Pre-Register Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Info/>
    </div>
  );
};

export default Homepage;
