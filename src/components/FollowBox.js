const React = require('react');
const ReactDOM = require('react-dom');

const FollowBox= React.createClass({
  render: function() {
    return (
      <div className="panel">
        <div className="panel-heading text-center">
          Who to follow...
        </div>
      </div>
    );
  }
});

module.exports = FollowBox;