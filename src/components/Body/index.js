// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <nav className="body">
          {showLeftNavbar && (
            <nav className="left-nav-bar">
              <h1 className="nav-bar-text">Left Navbar Menu</h1>
              <ul className="nav-items">
                <li className="nav-item">Item 1</li>
                <li className="nav-item">Item 2</li>
                <li className="nav-item">Item 3</li>
                <li className="nav-item">Item 4</li>
              </ul>
            </nav>
          )}
          {showContent && (
            <div className="content">
              <h1 className="content-text">Content</h1>
              <p className="content-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <nav className="right-nav-bar">
              <h1 className="nav-bar-text">Right Navbar</h1>
              <ul className="nav-items">
                <li className="nav-box-item">Ad 1</li>
                <li className="nav-box-item">Ad 2</li>
              </ul>
            </nav>
          )}
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
