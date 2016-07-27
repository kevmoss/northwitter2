/**
 * Created by paul on 27/07/2016.
 */

const React = require('react');
const ReactDOM = require('react-dom');
//const Trends = require('./Trends');

const TweetText = React.createClass({
  render: function() {
    console.log(this.props.hashtags);
    var hashtags = this.props.hashtags;
    var mentions = this.props.userMentions;
    var urls = this.props.urls;                                                          // hashtag prop has indices
    console.log(this.props);
    var tweetArray = [];                                         // store tweet as array
    var indices = [0];                                           // indices to split tweet
    hashtags.forEach(function (hashtag) {
      indices.push(hashtag.indices[0], hashtag.indices[1])      //index[0] is start, index[1] is finish
    });
    mentions.forEach(function (mention) {
      indices.push(mention.indices[0], mention.indices[1])
    });
    urls.forEach(function (urls) {
      indices.push(urls.indices[0], urls.indices[1])
    });
    indices.sort(function(a,b) {
      return a-b;
    });
    indices.push(this.props.text.length);                       //index[last] has to be length of tweet
    console.log(indices);
    indices.forEach(function (tweetIndex, index) {
      if (index < indices.length - 1){
        tweetArray.push(this.props.text.slice(tweetIndex, indices[index+1]))
      }
    }.bind(this));
    console.log(tweetArray);

    var urlCount = -1;

    tweetArray = tweetArray.map(function (tweetPart, index) {
      if (tweetPart[0] === '#') {
        return (<a href={"https://twitter.com/hashtag/" + tweetPart.slice(1) + "?src=hash"} target="new">{tweetPart}</a>)
      } else if (tweetPart[0] === '@') {
        return <a href={"https://twitter.com/" + tweetPart.slice(1)} target="new">{tweetPart}</a>
      } else if (index % 2 === 1 ) {
        urlCount ++;
        return (<a href={tweetPart} target="new">{tweetPart}</a>);
      }
      else
      {
        return tweetPart;
      }
    });



    return (
      <div className="panel">
        {tweetArray}
      </div>
    );
  }
});

module.exports = TweetText;

//<p>hi @kev we are #coding a copy of www.twitter.com</p>

//<p>hi <a href='https://twitter.com/kev'>@kev</a> we are <a>#coding</a> a copy of <a>www.twitter.com</a></p>