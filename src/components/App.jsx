import { Statistics } from "./Feedback/Statistics/Statistics";
import { FeedbackOptions } from "./Feedback/FeedbackOptions/FeedbackOptions";
import { Section } from "./Feedback/Section/Section";
import { Notification } from "./Feedback/Notification/Notification";
const { Component } = require("react");

export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  }

  handleClick = (option) => {
    this.setState(prev => ({
        [option]: prev[option] + 1,
    }));
  }

//   good = () => {
//       this.setState((prevState) => ({ good: prevState.good + 1}));
//   }

//   neutral = () => {
//       this.setState((prevState) => ({ neutral: prevState.neutral + 1}));
//   }

//   bad = () => {
//       this.setState((prevState) => ({ bad: prevState.bad + 1}));
//   }
  countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      const totalFeedback = good + neutral + bad;
      
      if (totalFeedback === 0) {
          return 0;
      }
  
      const percentage = (good / totalFeedback) * 100;
      return Math.round(percentage);
  }
  

  render () {
      const { good, neutral, bad } = this.state
      const totalFeedback = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();
      const total = good + neutral + bad;
      let isShowStatistics = total > 0;
      return (
          <div
            style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: 30,
              color: '#010101'
            }}
          >
              <Section title="Please leave feedback">
                  <FeedbackOptions 
                     options={Object.keys(this.state)}
                     onLeaveFeedback={this.handleClick}
                  />
              </Section>
              {isShowStatistics ? (
                <Section title="Statistics">
                <Statistics 
                    good={good} 
                    neutral={neutral} 
                    bad={bad} 
                    total={totalFeedback} 
                    positivePercentage={positivePercentage}
                />
                </Section>
              )
              :
              (<Notification message="There is no feedback" />)
              }
          </div>
      )
  }
}
