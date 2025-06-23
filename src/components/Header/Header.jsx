import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header class="header">
        <nav>
          <div class="logo">
            <strong id="v">Vivekanand College</strong>
            <div class="n">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/admissions">
                <button class="apply-btn">Apply Now!</button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* <header class="main-header">
        {" "}
        <div class="college-name">
          <a href="/" data-discover="true">
            Vivekanand College
          </a>{" "}
        </div>
        <nav class="navbar desktop-nav">
          <a class="nav-item" href="/home" data-discover="true">
            Home
          </a>
          <a class="nav-item" href="/about" data-discover="true">
            About
          </a>
          <a class="nav-item" href="/courses" data-discover="true">
            Courses
          </a>
          <a class="nav-item" href="/contact" data-discover="true">
            Contact
          </a>
          <a
            class="nav-item btn primary-btn"
            href="/admissions"
            data-discover="true"
          >
            Apply Now!
          </a>{" "}
        </nav>
        <button class="hamburger-menu">
          <span class="hamburger-icon"></span>
          <span class="hamburger-icon"></span>
          <span class="hamburger-icon"></span>
        </button>
        <nav class="drawer-nav ">
          <button class="close-drawer-btn">✕</button>
          <a class="nav-item" href="/" data-discover="true">
            Home
          </a>
          <a class="nav-item" href="/about" data-discover="true">
            About
          </a>
          <a class="nav-item" href="/courses" data-discover="true">
            Courses
          </a>
          <a class="nav-item" href="/contact" data-discover="true">
            Contact
          </a>
          <a
            class="apply-btn"
            href="/admissions"
            data-discover="true"
          >
            Apply Now!
          </a>
        </nav>
      </header> */}

    </div>
  );
};
export default Header;
