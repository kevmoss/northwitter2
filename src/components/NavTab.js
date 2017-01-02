const React = require('react');

const NavTab = function (props) {
  const activeClass = props.isActive ? 'is-active' : '';
  return (
    <a href="#" className={`nav-item is-tab ${activeClass}`}>
      <i className={`fa fa-${props.icon} fa-2x`}></i>&nbsp;
      {props.children}
    </a>
  )
}

module.exports = NavTab;
