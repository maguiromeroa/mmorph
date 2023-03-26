import React from "react";
import "./style.scss";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Jost:wght@300&family=Nunito:wght@200&display=swap');
      </style>
      <h2 className="navbar-links"><Link to="/">home</Link></h2>
      <h2 className="navbar-links"><Link to="/socialmedia">social media</Link></h2>
      <h2 className="navbar-links"><Link to="/desing">desing grafico</Link></h2>
      <h2 className="navbar-links"><Link to="/dev">sviluppo web</Link></h2>
      <h2 className="navbar-links"><Link to="/contact">contatto</Link></h2>
    </div>
  );
}

export default Navbar;
