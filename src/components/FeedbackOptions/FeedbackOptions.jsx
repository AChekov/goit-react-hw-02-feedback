import React, { Component } from 'react';

class FeedbackOptions extends Component {
  static propTypes = {};

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  percentagePositiveFeedback = () => {
    return parseInt((this.state.good / this.totalFeedback()) * 100);
  };

  render() {
    // const { handleGood, handleNeutral, handleBad } = this.props;
    return (
      <section>
        <h1>Please leave feedback</h1>

        <div>
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <div>
          <span>
            <h2>Statistics</h2>
            <ul>
              <li>Good:{this.state.good}</li>
              <li>Neutral:{this.state.neutral}</li>
              <li>Bad:{this.state.bad}</li>
              <li>Total:{this.totalFeedback()}</li>
              <li>Positive feedback:{this.percentagePositiveFeedback()}%</li>
            </ul>
          </span>
        </div>
      </section>
    );
  }
}

export default FeedbackOptions;
