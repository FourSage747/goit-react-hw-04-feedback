export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button onClick={() => {onLeaveFeedback(option)}}>{option}</button>
        </li>
      ))}
      {/* <li>
        <button onClick={neutral}>Neutral</button>
      </li>
      <li>
        <button onClick={bad}>Bad</button>
      </li> */}
    </ul>
  );
};
