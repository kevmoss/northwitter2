const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

const ProfileBox = React.createClass({

  getInitialState: function () {
    return {

    }
  },

  // path to data...
  // response.data.tweetData[0].user. and then
  // followers_count = number of followers
  // friends_count = number you are following
  // statuses_count = number of tweets
  // name = name
  // screen_name = Twitter handle
  // profile_banner_url = banner picture
  // profile_image_url = profile picture
  
  // use multiline to style this profile box later

  componentDidMount: function () {
    this.fetchTweets();
  },

  fetchTweets: function () {
    let self = this;
    axios.get('https://protected-oasis-31937.herokuapp.com/tweets/peedeerich')     // where our API is located.---- Might need the catch...
      .then(function (response) {
        console.log(response);
        var userData = response.data.tweetData[0].user;
        self.extractUserData(userData);
      });
  },

  extractUserData: function (userData) {
    this.setState({
      followers_count: userData.followers_count,
      friends_count: userData.friends_count,
      statuses_count: userData.statuses_count,
      name: userData.name,
      screen_name: userData.screen_name,
      profile_banner_url: userData.profile_banner_url,
      profile_image_url: userData.profile_image_url
    });
  },


  render: function() {
    return (
      <div className="panel">
        <div className="panel-heading text-center">
          <img src={this.state.profile_banner_url}/>
          <img src={this.state.profile_image_url}/>
          <p>{this.state.name}</p>
          <p>@{this.state.screen_name}</p>
          <p>Tweets {this.state.statuses_count}</p>
          <p>Following {this.state.friends_count}</p>
          <p>Followers {this.state.followers_count}</p>
        </div>
      </div>
    );
  }
});

module.exports = ProfileBox;