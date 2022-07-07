import FeedbackOptions from './FeedbackOptions';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackOptions
        good={0}
        neutral={0}
        bad={0}
        total={0}
        positivePercentage={0}
      />
    </div>
  );
};
