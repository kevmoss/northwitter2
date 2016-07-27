/**
 * Created by paul on 27/07/2016.
 */

const React = require('react');
const ReactDOM = require('react-dom');
//const Trends = require('./Trends');

const TweetText = React.createClass({
  render: function() {
    console.log(this.props.hashtags);
    var hashtags = this.props.hashtags;               // hashtag prop has indices
    var tweetArray = [];                              // store tweet as array
    var indices = [0];                                // indices to split tweet
    hashtags.forEach(function (hashtag) {
      indices.push(hashtag.indices[0], hashtag.indices[1])      //index[0] is start, index[1] is finish
    });
    indices.push(this.props.text.length);                       //index[last] has to be length of tweet
    //console.log(indices);
    indices.forEach(function (tweetIndex, index) {
      if (index < indices.length - 1){
        tweetArray.push(this.props.text.slice(tweetIndex, indices[index+1]))
      }
    }.bind(this));
    console.log(tweetArray);

    tweetArray = tweetArray.map(function (tweetPart) {
      if (tweetPart[0] === '#') {
        return (<a href={"https://twitter.com/hashtag/" + tweetPart.slice(1) + "?src=hash"}>{tweetPart}</a>)
      } else {
        return tweetPart
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