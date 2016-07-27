const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

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
            const userMentions = tweet.entities.user_mentions[0] ? <a href={"https://twitter.com/" + tweet.entities.user_mentions[0].screen_name}>@{tweet.entities.user_mentions[0].screen_name}</a> : null;
            const hashtags = tweet.entities.hashtags[0] ? <a href={"https://twitter.com/hashtag/" + tweet.entities.hashtags[0].text + "?src=hash"}>#{tweet.entities.hashtags[0].text}</a> : null;
            const urls = tweet.entities.urls[0] ? <a href={tweet.entities.urls[0].expanded_url}>{tweet.entities.urls[0].expanded_url}</a> : null;

            return (
              <div key={index} className='panel-block'>
                <img  src={tweet.user.profile_image_url}/>
                <p>{tweet.text}</p>
                <p>{tweet.created_at}</p>
                {tweetImg}
                {userMentions}<br></br>
                {hashtags}<br></br>
                {urls}
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
