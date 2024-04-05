import React from "react"
import "../CSS/Navbar.css"
import IconButton from "@mui/material/IconButton"
import CasinoIcon from "@mui/icons-material/Casino"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Wiki Explorer
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search WikiWrapper" />
        <button type="submit" className="search-button">
          Search
        </button>
        <IconButton type="submit" color="primary" className="dice-button">
          <CasinoIcon />
        </IconButton>
      </div>
      <div className="login-section">
        <button className="login-button">Login/Create Account</button>
      </div>
    </nav>
  )
}

export default Navbar
