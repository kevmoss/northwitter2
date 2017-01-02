const React = require('react');

const NewTweet = React.createClass({
  getInitialState: function () {
    return {
      selected: false,
      tweet: ''
    };
  },
  handleChange (e) {
    var text = e.target.value;
    this.setState({
      tweet: text
    });
  },
  select: function () {
    this.setState({
      selected: true
    });
  },
  deSelect: function () {
    this.setState({
      selected: false
    });
  },
  render: function () {
    var style = {
      border: '1 px solid #' + this.props.color
    };

    if (this.state.selected) {
      style.height = '120px';
    }

    if (!this.state.selected) {
      style.height = '50px';
    }

    var valid = this.state.tweet.length <= 140;

    return (
      <div>
        <h4 className="title is-4">Tweet Now</h4>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={this.props.profileImg} className='small-img' />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="control">
                <textarea className="textarea new-tweet-text" placeholder="What's happening?" style={style} onFocus={this.select} onBlur={this.deSelect} onChange={this.handleChange} />
              </p>
              <div className='tweet'>
                <p className={valid ? 'valid' : 'invalid'}>
                  {140 - this.state.tweet.length}
                </p>
                <button className='tweet-button' style={{'backgroundColor': '#' + this.props.color}} disabled={!valid}>
                  <i className='fa fa-pencil' />
                  <span>Tweet</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
});

module.exports = NewTweet;