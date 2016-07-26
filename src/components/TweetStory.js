const React = require('react');
const ReactDOM = require('react-dom');

const TweetStory= React.createClass({
  render: function() {
    return (
      <div className="panel">
        <div className="panel-heading text-center">
          Tweet Story
        </div>
      </div>
    );
  }
});

module.exports = TweetStory;