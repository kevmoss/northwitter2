const React = require('react');
const ReactDOM = require('react-dom');



const NavBar = React.createClass({
  render: function() {
    return (
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item" href="#">
            Home
          </a>
          <a className="nav-item" href="#">
            Moments
          </a>
          <a className="nav-item" href="#">
            Notifications
          </a>
          <a className="nav-item" href="#">
            Messages
          </a>
        </div>
        <div className="nav-center">
          <a className="nav-item" href="#">
            <span className="icon">
              Twitter
              <i className="fa fa-twitter"></i>
            </span>
          </a>
        </div>
        <div className="nav-right nav-menu">
          <input className="nav-item" placeholder="Search Twitter"/>
          <a className="nav-item" href="#">Profile and Settings</a>
          <button className="nav-item">Tweet</button>
        </div>
      </nav>

    );
  }
});

module.exports = NavBar;


