const React = require('react');
const _ = require('underscore');
const moment = require('moment');

const Tweet = React.createClass({
  genLink (entity) {
    var style = `style='color: #${this.props.color}'`;
    var link = '';
    if (entity.screen_name) link += `<a href='https://twitter.com/${entity.screen_name}' ${style}>@${entity.screen_name}`;
    else if (entity.text) link += `<a href='https://twitter.com/hashtag/${entity.text}' ${style}>#${entity.text}`;
    else if (entity.type === 'photo') link += `<div class='photo'><a href='${entity.expanded_url}' ${style}><img src='${entity.media_url}'></div>`;
    else if (entity.url && !entity.type) {
      link += `<a href='${entity.expanded_url}' ${style}>${entity.url}`;
    }
    return link + '</a>';
  },
  orderEntities (entities) {
    return entities.sort(function (a, b) {
      return a.indices[0] < b.indices[0];
    });
  },
  replaceEntities (tweet, entities) {
    var text = tweet.text;
    this.orderEntities(entities).forEach((entity) => {
      var link = this.genLink(entity);
      text = text.slice(0, entity.indices[0]) + link + text.slice(entity.indices[1]);
    });
    return text;
  },
  parseText (tweet) {
    var entities = this.getEntities(tweet);
    tweet = this.replaceEntities(tweet, entities);
    return {__html: tweet};
  },
  getEntities (tweet) {
    return _.reduce(tweet.entities, function (acc, entity) {
      return acc.concat(entity);
    }, []);
  },
  parseDate (date) {
    console.log(date, typeof date);
  },
  render: function () {
    var style = `style='color: #${this.props.color}'`;
    return (
      <div className="tweetCard">
        <article className="media">
          <figure className="media-left">
            <p className="image">
              <img src={this.props.tweet.user.profile_image_url} className='tweet-profile-img' />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.tweet.user.name}</strong> <small>@{this.props.tweet.user.screen_name}</small>
                <small> - {this.parseDate(this.props.tweet.created_at)}</small>
              </p>
              <div dangerouslySetInnerHTML={this.parseText(this.props.tweet)} />
            </div>
            <nav className="level">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-reply" style={{color: `#${this.props.color}`}}></i></span>
                </a>
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-retweet" style={{color: `#${this.props.color}`}}></i></span>
                  <span className="tweetCardCounter" style={{color: `#${this.props.color}`}}>{this.props.tweet.retweet_count}</span>
                </a>
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-heart" style={{color: `#${this.props.color}`}}></i></span>
                  <span className="tweetCardCounter" style={{color: `#${this.props.color}`}}>{this.props.tweet.favorite_count}</span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    );
  }
});

module.exports = Tweet;