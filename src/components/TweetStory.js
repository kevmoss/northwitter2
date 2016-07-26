const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

const TweetStory= React.createClass({
  getInitialState: function () {
    return {
      loaded: false
    }
  },

  componentDidMount: function () {
    this.fetchStory()
  },

  fetchStory: function () {
    let self = this;
    axios.get('https://protected-oasis-31937.herokuapp.com/tweets')
      .then(function (response) {
        console.log(response);
        var userTweets = response.data[0].tweets;
        self.extractUserTweets(userTweets);
      })
  },
  
  extractUserTweets: function (userTweets) {
    var data = userTweets.map(function(userTweet){
      return {text: userTweet.text }
    });
    this.setState({
      loaded: true,
      tweets: data
    })
  },

  render: function() {
    if (!this.state.loaded) {
      return (
        <p>Loading</p>
      );
    }
    return (
      <div>
        {
          this.state.tweets.map(function (tweet, index) {
            return (
              <div key={index} className='panel-block'>
                <p>{tweet.text}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
});

module.exports = TweetStory;