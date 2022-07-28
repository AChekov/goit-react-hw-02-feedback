import { useState } from 'react';
import { Section } from './App.styled';
import Statistics from './Statistics';
import Notification from './Notification';
import Container from './Container';
import FeedbackOptions from './FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedBackTypes = { good, neutral, bad };

  const onBtnClick = evt => {
    const { name } = evt.currentTarget;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = () => {
    return Object.values(feedBackTypes).reduce((acc, value) => acc + value, 0);
  };

  const percentagePositiveFeedback = () => {
    return parseInt((good / totalFeedback()) * 100);
  };

  return (
    <Section>
      <Container title="Please use the buttons to leave a good review. :)">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onClick={onBtnClick}
        />
      </Container>

      <Container title="Statistics">
        {totalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={percentagePositiveFeedback()}
          />
        ) : (
          <Notification title="No feedback given yet!" />
        )}
      </Container>
    </Section>
  );
}

// ============== CLASS ==============
// export class App extends Component {
//   static propTypes = {};

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onBtnClick = evt => {
//     const { name } = evt.currentTarget;
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   totalFeedback = () => {
//     return Object.values(this.state).reduce((acc, value) => acc + value, 0);
//   };

//   percentagePositiveFeedback = () => {
//     return parseInt((this.state.good / this.totalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <Section>
//         <Container title="Please use the buttons to leave a good review. :)">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onClick={this.onBtnClick}
//           />
//         </Container>

//         <Container title="Statistics">
//           {this.totalFeedback() ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.totalFeedback()}
//               positivePercentage={this.percentagePositiveFeedback()}
//             />
//           ) : (
//             <Notification title="No feedback given yet!" />
//           )}
//         </Container>
//       </Section>
//     );
//   }
// }
