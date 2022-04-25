import React from "react";
import "./info.scss";
import B1 from "../../photos/blog1.png";
import B2 from "../../photos/blog2.png";
import B3 from "../../photos/blog3.png";
import B4 from "../../photos/blog4.png";

const Info = () => {
  return(
    <div className="blogpage">
    <h1 className="headi"><b>BLOGS</b></h1>
      <div className="blogContainer">
    
      <div className="blog">
      <div className="imag">
      <img className="imagu" src={B1} alt="blog1"/>
      </div>
      <div className="textu">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        
      </div>
      </div>

      <div className="blog">
      <div className="imag">
      <img className="imagu" src={B2} alt="blog1"/>
      </div>
      <div className="textu">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
       
       
      </div>
      </div>

      <div className="blog">
      <div className="imag">
      <img className="imagu" src={B3} alt="blog1"/>
      </div>
      <div className="textu">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       
      </div>
      </div>

      <div className="blog">
      <div className="imag">
      <img className="imagu" src={B4} alt="blog1"/>
      </div>
      <div className="textu">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      
      </div>
      </div>

      </div>
      </div>
  );
};

export default Info;
