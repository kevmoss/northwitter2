const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

const Trend = React.createClass({
  getInitialState: function () {
    return {
      loaded: false
    }
  },
  componentDidMount: function () {
    this.fetchTrends()
  },
  fetchTrends: function () {
    let self = this;
    axios.get('https://protected-oasis-31937.herokuapp.com/trends')     // where our API is located.---- Might need the catch...
      .then(function (response) {                                       // here's the API, accept or reject it.
        self.sortTrends(response.data.tweetData.trends[0].trends);      // sort trends
      })
  },
  sortTrends: function (trends) {
    var data = trends.map(function (trend){                             // trends the array, .map passes the trend(element each time)
      return {volume: trend.tweet_volume, name: trend.name}             // returning the array with key stuff... volume and name
    }).filter(function (trend) {                                        // filter ones with volume.
      return trend.volume
    }).sort(function (a, b) {                                           // sorting - maps over every element of sorts by volume.
      return b.volume - a.volume
    });
    this.setState({                                                     // set state, set loaded, set trends
      loaded: true,
      trends: data
    });
  },
  render: function () {
    if (!this.state.loaded) {
      return (
        <p>Loading...</p>
        //James wants a spinner
      );
    }

    // Add Error log??
    return (
      <div>
        {
          this.state.trends.map(function (tweet, index) {
            return (
              <div key={index} className="panel-block">
                <p><strong>{tweet.name}</strong></p>
                <p className="trend-count">{tweet.volume.toLocaleString()} Tweets</p>
              </div>
            )
          })
        }
      </div>
    )
  }
});

module.exports = Trend;