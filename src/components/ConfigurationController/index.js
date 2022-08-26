// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onContentShow = event => {
        onToggleShowContent(event.target.checked)
      }

      const onLeftNavBarShow = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onRightNavBarShow = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="control-container">
          <h1 className="layout-text">Layout</h1>
          <ul className="input-items">
            <li className="input-item">
              <input
                checked={showContent}
                type="checkbox"
                onChange={onContentShow}
                className="input"
                id="contentInput"
              />
              <label className="label" htmlFor="contentInput">
                Content
              </label>
            </li>
            <li className="input-item">
              <input
                checked={showLeftNavbar}
                type="checkbox"
                onChange={onLeftNavBarShow}
                className="input"
                id="leftNavInput"
              />
              <label className="label" htmlFor="leftNavInput">
                Left Navbar
              </label>
            </li>
            <li className="input-item">
              <input
                checked={showRightNavbar}
                type="checkbox"
                onChange={onRightNavBarShow}
                className="input"
                id="rightNavInput"
              />
              <label className="label" htmlFor="rightNavInput">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
