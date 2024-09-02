import ImgLogo from '../assets/sarah-logo.webp'
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="nav-container">
      <nav className="navbar">
        <ul className={`navlinks-container navlinks-left ${isActive ? 'active' : ''}`}>
          <li>
            <Link className="nav-link right-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link right-link" href="#">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link right-link" href="#">
              Coach
            </Link>
          </li>
        </ul>
        <div className="navbar-logo">
            <img src={ImgLogo} alt="Logo Choaching by Sarah" />
          </div>
        <ul className={`navlinks-container navlinks-right ${isActive ? 'active' : ''}`}>
        <li>
            <Link className="nav-link left-link" href="#">
              Work with me
            </Link>
          </li>
          <li>
            <Link onClick={isActive} className="nav-link left-link" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="nav-link left-link" href="#">
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={handleClick} className={`menu ${isActive ? 'active' : ''}`}>
          <div className='top-line'></div>
          <div className='mid-line'></div>
          <div className='bot-line'></div>
        </div>
      </nav>
    </header>
  );
}
