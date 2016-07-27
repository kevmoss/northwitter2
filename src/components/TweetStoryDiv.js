const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
const TweetStory = require('./TweetStory');

const TweetStoryDiv = React.createClass({

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
        var allTweets = response.data;//[0].tweets;
        self.extractAllTweets(allTweets);
      })
  },

  extractAllTweets: function (allTweets) {
    var result = [];
    allTweets.map(function (person, index) {
      return person.tweets;
    })
      .forEach(function (personsTweets, index) {
        personsTweets.forEach(function (tweet, index) {
          result.push(tweet);
        })
      });
    // result = this.sortAllTweets(result);
    console.log(result);
    // var allDates = result.map(function (tweet, index) {
    //   return Date.parse(tweet.created_at);
    //
    // }).sort(function(dateA, dateB) {
    //   return dateB - dateA;
    // });
    // console.log(allDates);
    var sortedStory = result.sort(function (tweetA, tweetB) {
      return Date.parse(tweetB.created_at)-Date.parse(tweetA.created_at);
    });
    console.log(sortedStory);
    this.setState({
      tweets: sortedStory,
      loaded: true
    })
  },
  //
  // sortAllTweets: function (allTweets) {
  //   allTweets.sort(function (tweetA, tweetB ) {
  //     // return Date.parse(tweetA.created_at)-Date.parse(tweetB.created_at);
  //     return 1;
  //   })
  // },

  render: function() {
    return (
      <div className="panel">
        <div className="panel-heading text-center">
          <h3 className="title">Tweet Story</h3>
        </div>
        <TweetStory tweets={this.state.tweets} loaded={this.state.loaded}/>
      </div>
    );
  }
});

module.exports = TweetStoryDiv;