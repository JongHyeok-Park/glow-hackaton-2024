import './SendChat.css';

function SendChat(props) {
  const { imagePath, time, message } = props;

  return (
    <section className="send-chat">
      <figure className="send-chat-image-wrapper">
        {imagePath ? <img src={imagePath} alt="user-profile" /> : null}
      </figure>
      <article>
        <span className="send-chat-time">{time}</span>
        <div className="send-chat-message">{message}</div>
      </article>
    </section>
  );
}

export default SendChat;
