import PropTypes from 'prop-types';

function ItemsList({ list }) {
  const answersSet = {
    swimming: "Swimming",
    bathing: "Bathing",
    chatting: "Chatting",
    noTime: "I don't like to spend time with it"
  };

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

export default function AnswersItem({ answerItem, onEdit }) {
  return (
    <li>
      <article className="answer">
        <h3>{answerItem.username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{answerItem.colour}</span>
        </p>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={answerItem.timeSpent} />
        </div>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{answerItem.review}</span>
        </p>
        <p>
          <em>Your email:</em>
          <span className="answer__line">{answerItem.email}</span>
        </p>
        <button onClick={onEdit}>Edit</button>
      </article>
    </li>
  );
}

AnswersItem.propTypes = {
  answerItem: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
};
ItemsList.propTypes = {
  list: PropTypes.array.isRequired,
}
