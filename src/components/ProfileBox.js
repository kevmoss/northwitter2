const React = require('react');
const ReactDOM = require('react-dom');

const ProfileBox = React.createClass({
  render: function() {
    return (
      <div className="panel">
        <div className="panel-heading text-center">
         Profile Box
        </div>
      </div>
    );
  }
});

module.exports = ProfileBox;