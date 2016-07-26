const React = require('react');
const ReactDOM = require('react-dom');
const TrendsDiv = require('./components/TrendsDiv');
const NavBar = require('./components/NavBar');

const App = React.createClass({
  render: function () {
    return (
      <div className="container ">
        <NavBar />
        <div className="columns">
          <div className="column is-one-third">
            <TrendsDiv />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
