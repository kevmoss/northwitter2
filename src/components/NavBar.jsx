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


/*<nav className="nav">
 /!*<div className="nav-left">
 <a className="nav-item" href="#">
 Home
 <img src="/images/bulma.png" alt="Bulma logo}"/>
 </a>
 <a className="nav-item" href="#">
 Moments
 <img src="/images/bulma.png" alt="Bulma logo}"/>
 </a>
 <a className="nav-item" href="#">
 Notifications
 <img src="/images/bulma.png" alt="Bulma logo}"/>
 </a>
 <a className="nav-item" href="#">
 Messages
 <img src="/images/bulma.png" alt="Bulma logo}"/>
 </a>
 </div>*!/

 /!*        <div className="nav-center">
 <a className="nav-item" href="#">
 <span className="icon">
 <i className="fa fa-twitter"></i>
 </span>
 </a>
 </div>

 <span className="nav-toggle">
 <span></span>
 <span></span>
 <span></span>
 </span>

 <div className="nav-right nav-menu">

 /!*<div className="navbar-item">
 <p className="control has-addons">
 INPUT Search
 /!*<input className="input" type="text" placeholder="Search Twitter">
 <button className="button">
 Search
 </button>
 </input>*!/
 </p>
 </div>*!/

 <div className="navbar-item">
 <a className="nav-item" href="#">
 <img src="/images/bulma.png" alt="Profile and Settings"></img>
 </a>
 </div>

 <div className="navbar-item">
 <a className="nav-item" href="#">
 Tweet
 <img src="/images/bulma.png" alt="Tweet"></img>
 </a>
 </div>

 </div>*!/
 </nav>*/


