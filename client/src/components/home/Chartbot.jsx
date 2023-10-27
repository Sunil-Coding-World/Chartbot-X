import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faClose, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const initialMessages = [
  {
    type: 'incoming',
    message: 'Hi there 👋\nHow can I help you today?',
  },
];

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    document.body.classList.toggle('show-chatbot');
  };

  const handleUserInput = (e) => {
    setInputMessage(e.target.value);
  };

  const handleUserSendMessage = () => {
    if (inputMessage) {
      setMessages([...messages, { type: 'outgoing', message: inputMessage }]);
      setInputMessage('');

      setTimeout(() => {
        setMessages([...messages, { type: 'incoming', message: 'I am a chatbot response' }]);
      }, 1000);
    }
  };

  return (
    <div className={`App ${isChatOpen ? 'show-chatbot' : ''}`}>
      <button className="chatbot-toggler" onClick={toggleChat}>
        <span className="material-symbols-rounded">
          <FontAwesomeIcon className="open-icon" icon={faRobot} />
        </span>
        <span className="material-symbols-outlined">
          <FontAwesomeIcon className="open-icon" icon={faClose} />
        </span>
      </button>
      <div className="chatbot">
        <header>
          <h2>Chatbot</h2>
          <span className="close-btn material-symbols-outlined" onClick={toggleChat}>
            close
          </span>
        </header>
        <ul className="chatbox">
          {messages.map((msg, index) => (
            <li key={index} className={`chat ${msg.type}`}>
              <span className="material-symbols-outlined">
                <FontAwesomeIcon className="open-icon" icon={faRobot} />
              </span>
              <p>{msg.message}</p>
            </li>
          ))}

          <li className="chat outgoing">
            <p>Can you tell me more about your pricing?</p>
          </li>
          <li className="chat incoming">
            <span className="material-symbols-outlined">
              <FontAwesomeIcon className="open-icon" icon={faRobot} />
            </span>
            <p>Sure, we have different pricing plans...</p>
          </li>
        </ul>
        <div className="chat-input">
          <textarea
            placeholder="Enter a message..."
            spellCheck="false"
            required
            value={inputMessage}
            onChange={handleUserInput}
          ></textarea>
          <span
            id="send-btn"
            className="material-symbols-rounded"
            onClick={handleUserSendMessage}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
