import { Statistics } from "./Feedback/Statistics/Statistics";
import { FeedbackOptions } from "./Feedback/FeedbackOptions/FeedbackOptions";
import { Section } from "./Feedback/Section/Section";
import { Notification } from "./Feedback/Notification/Notification";
import { useState } from "react";


export const App = () => {
  // state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  // }
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // handleClick = (option) => {
  //   this.setState(prev => ({
  //       [option]: prev[option] + 1,
  //   }));
  // }
  const handleClick = (option) => {
    if (option === 'good') {
      setGood(good + 1);
    } else if (option === 'neutral') {
      setNeutral(neutral + 1);
    } else if (option === 'bad') {
      setBad(bad + 1);
    }
  }

  const countTotalFeedback = () => {
      // const { good, neutral, bad } = this.state;
      return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
      // const { good, neutral, bad } = this.state;
      const totalFeedback = good + neutral + bad;
      
      if (totalFeedback === 0) {
          return 0;
      }
  
      const percentage = (good / totalFeedback) * 100;
      return Math.round(percentage);
  }
  

  
      // const { good, neutral, bad } = this.state
      const totalFeedback = countTotalFeedback();
      const positivePercentage = countPositiveFeedbackPercentage();
      const total = good + neutral + bad;
      let isShowStatistics = total > 0;
      const options={
        good: 'good',
        neutral: 'neutral',
        bad: 'bad',
      }
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
                     options={Object.keys(options)}
                     onLeaveFeedback={handleClick}
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
