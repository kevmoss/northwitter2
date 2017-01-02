const React = require('react');

const TileBox = function (props) {
  return (
    <div className={`tile box ${props.isVertical ? 'is-vertical' : ''} is-child no-grow ${props.noPad && 'no-pad'}`}>
      {props.children}
    </div>
  );
};

module.exports = TileBox;