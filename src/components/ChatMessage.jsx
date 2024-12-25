import ChatbotIcon from "./ChatbotIcon"
import PropTypes from "prop-types";
const ChatMessage = ({chat}) => {
  return (
<div className={`message ${chat.role === "model"? 'bot': 'user'}-message`}>
    {chat.role==="model" && <ChatbotIcon/>}
            <p className="message-text">
              {chat.text}
              </p>
          </div>  )
}

ChatMessage.propTypes = {
    chat: PropTypes.shape({
      role: PropTypes.string, // Validate role as a required string
      text: PropTypes.string, // Validate text as a required string
    }).isRequired,
  };

export default ChatMessage