//Components for ChatBubble that we sent.
const MyMessage = ({ message }) => {
  //if user uploads an image message
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  //if user sends the text message
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;