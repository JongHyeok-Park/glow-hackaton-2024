import './ReceiveChat.css';

function ReceiveChat(props) {
  const { imagePath, time, message } = props;

  return (
    <section className="receive-chat">
      <figure className="receive-chat-image-wrapper">
        {imagePath ? <img src={imagePath} alt="user-profile" /> : null}
      </figure>
      <article>
        <span className="receive-chat-time">{time}</span>
        <div className="receive-chat-message">{message}</div>
      </article>
    </section>
  );
}

export default ReceiveChat;
