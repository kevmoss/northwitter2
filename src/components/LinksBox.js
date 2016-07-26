const React = require('react');
const ReactDOM = require('react-dom');

const LinksBox= React.createClass({
  render: function() {
    return (
      <div className="panel">
        <div className="panel-heading text-center">
          Links
        </div>
      </div>
    );
  }
});

module.exports = LinksBox;