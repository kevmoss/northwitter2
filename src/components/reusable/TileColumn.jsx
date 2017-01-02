const React = require('react');

const TileColumn = function (props) {
  return (
    <div className={`tile is-vertical is-parent is-${props.columns} flex-start`}>
      {props.children}
    </div>
  );
};

module.exports = TileColumn;