const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
const TweetText = require('./TweetText');

const TweetStory= React.createClass({
  getInitialState: function () {
    return {
      //loaded: false
    }
  },

  componentDidMount: function () {
    //this.fetchStory()
  },

  /*fetchStory: function () {
    let self = this;
    axios.get('https://protected-oasis-31937.herokuapp.com/tweets')
      .then(function (response) {
        console.log(response);
        var userTweets = response.data;//[0].tweets;
        self.extractUserTweets(userTweets);
      })
  },*/
  
  /*extractUserTweets: function (userTweets) {





    var data = userTweets.map(function(userTweet){
      return {text: userTweet.text }
    });
    this.setState({
      loaded: true,
      tweets: data
    })
  },*/
  
  

  render: function() {
    if (!this.props.loaded) {
      return (
        <p>Loading</p>
      );
    }
    return (
      <div>
        {
          this.props.tweets.map(function (tweet, index) {

            const tweetImg = tweet.entities.media ? <img src={tweet.entities.media[0].media_url}/> : null;
            const urlsTEST = tweet.entities.urls[0] ? <a href={tweet.entities.urls[0].expanded_url}>{tweet.entities.urls[0].expanded_url}</a> : null;

            const hashtags = tweet.entities.hashtags;
            const userMentions = tweet.entities.user_mentions;
            const urls = tweet.entities.urls;
            
            
            return (
              <div key={index} className='panel-block'>
                <img  src={tweet.user.profile_image_url}/>
                <TweetText key={index} text={tweet.text} hashtags={hashtags} userMentions={userMentions} urls={urls}/>
                <p>{tweet.created_at}</p>
                {tweetImg}
              </div>
            )
          })
        }
      </div>
    );
  }
});

module.exports = TweetStory;

// entities.media[0].media_url

/*
<div>{if (tweet.entities.media[0].media_url) {
  return (
  <img src={tweet.entities.media[0].media_url}/>
  )
}
}</div>*/
/*

var urlRegex = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;*/
