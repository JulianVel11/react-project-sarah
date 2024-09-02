import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ImgLogo from '../assets/sarah-logo.webp'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-media">
        <span>Follow me here & there</span>
        <div className="media-links">
          <a href="#">
            <YouTubeIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="footer-links">
        <ul>
        <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="#">
              About
            </Link>
          </li>
          <li>
            <Link href="#">
              Coach
            </Link>
          </li>
        </ul>
        <div className="footer-logo">
            <img src={ImgLogo} alt="Logo footer Coach Sarah" />
        </div>
        <ul>
        <li>
            <Link href="#">
              Work with me
            </Link>
          </li>
          <li>
            <Link to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-community">
        <span>Join my community</span>
        <div className="community-container">
          <h3>Brand up FB group</h3>
          <p>Scale Your Business with Design, Authority & Influence</p>
          <button>LET ME IN</button>
        </div>
      </div>
      <div className="footer-rights">
        <span>
          © Copyright 2021-2024 SarahCoach | All rights reserved | Developed by Scolpire
        </span>
      </div>
    </footer>
  );
}
