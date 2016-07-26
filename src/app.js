const React = require('react');
const ReactDOM = require('react-dom');
const TrendsDiv = require('./components/TrendsDiv');
const NavBar = require('./components/NavBar');
const ProfileBox = require('./components/ProfileBox');
const TweetStory = require('./components/TweetStory');
const FollowBox = require('./components/FollowBox');
const LinksBox = require('./components/LinksBox');


const App = React.createClass({
  render: function () {
    return (
      <div className="container ">
        <NavBar />
        <div className="columns">
          <div className="column is-one-quarter">
            <ProfileBox/>
            <TrendsDiv />
          </div>
          <div className="column is-half">
            <TweetStory />
          </div>
          <div className="column is-one-quarter">
            <FollowBox />
            <LinksBox />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
