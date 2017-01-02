const React = require('react');
const request = require('superagent');

const Tweet = require('./Tweet');

const Tweets = React.createClass({
  getInitialState: function () {
    return({
      loading: true
    })
  },
  componentWillMount: function () {
    this.getAllTweetData()
  },
  getAllTweetData: function () {
    request
      .get('https://protected-oasis-31937.herokuapp.com/tweets')
      .end((err, response) => {
        if (!err) this.extractTweetData(response.body);
      });
  },
  extractTweetData: function (users) {
    let tweets = users.reduce(function (mem,cur) {
      return mem.concat(cur.tweets)
    },[]).sort(function (a,b) {
      return Date.parse(b.created_at) - Date.parse(a.created_at);
    });

    this.setState({
      tweets: tweets,
      loading: false
    });
  },
  render: function () {
    if(this.state.loading){
      return(
        <div className="profileCard panel has-text-centered">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
        </div>
      )
    } else {
      return(
        <div className="profileCard ">
          <ul>
            {
              this.state.tweets.slice(0, 35).map((tweet ,index) => {
                if (tweet.user) {
                  return (
                    <li key={index}>
                      <Tweet tweet={tweet} color={this.props.color} />
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
      )
    }
  }
});

module.exports = Tweets;
