import './ChatDate.css';

function ChatDate(props) {
  const { date } = props;
  return (
    <div className="chat-date">
      <span>{date}</span>
    </div>
  );
}

export default ChatDate;
