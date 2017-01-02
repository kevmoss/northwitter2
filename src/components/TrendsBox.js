const React = require('react');
const request = require('superagent');
const USER_TWEETS_URL = require('../../config').USER_TWEETS_URL;

const TrendsBox = React.createClass({
  render: function () {
    return (
      <div className='profileCard'>
        <div className='card-header'>
          <img src={this.props.userData.profileBgImg} />
        </div>
        <div className='card-main'>
          <h4>{this.props.userData.name}</h4>
          <p>@{this.props.handle}</p>
          <div className='user-data'>
            <div>
              <p className='smallp'>T</p>
              <p className='boldp' style={{color: `#{this.props.userData.linkColor}`}}>
                {this.props.userData.numTweets}
              </p>
            </div>
            <div>
              <p className='smallp'>FOLLOWING</p>
              <p className='boldp' style={{color: `#{this.props.userData.linkColor}`}}>
                {this.props.userData.following}
              </p>
            </div>
            <div>
              <p className='smallp'>FOLLOWERS</p>
              <p className='boldp' style={{color: `#{this.props.userData.linkColor}`}}>
                {this.props.userData.followers}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TrendsBox;