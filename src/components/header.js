import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">HEY COLOMBIA</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/cities">Cities</Link>
            <Link to="/contact">Books</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
export default Header
