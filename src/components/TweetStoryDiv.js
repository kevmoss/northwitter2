const React = require('react');
const ReactDOM = require('react-dom');
const TweetStory = require('./TweetStory');

const TweetStoryDiv = React.createClass({
  render: function() {
    return (
      <div className="panel">
        <div className="panel-heading text-center">
          <h3 className="title">Tweet Story</h3>
        </div>
        <TweetStory />
      </div>
    );
  }
});

module.exports = TweetStoryDiv;