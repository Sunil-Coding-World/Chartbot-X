import React, { useEffect, useRef, useState } from "react";
import bot from "../../assets/bot.gif";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const messageInputRef = useRef(null);
  const initialGreetingAdded = useRef(false);

  useEffect(() => {
    if (!initialGreetingAdded.current) {
      addBotResponse("Hi Chartbot X at your service");
      initialGreetingAdded.current = true;
    }
  }, []);

  const addMessage = (text, isUser = false) => {
    setMessages((prevMessages) => [...prevMessages, { text, isUser }]);
  }

  const addBotResponse = (text) => {
    // Display a typing indicator
    addMessage(
      <div className="bot-response">
        <img src={bot} alt="Chatbot" className="bot-image" />
        <p>Typing...</p>
      </div>,
      false
    );

    // Simulate a delay before showing the actual response
    setTimeout(() => {
      // Remove the typing indicator
      setMessages((prevMessages) => prevMessages.slice(0, -1));

      // Add the actual response
      addMessage(
        <div className="bot-response">
          <img src={bot} alt="Chatbot" className="bot-image" />
          <p>{text}</p>
        </div>,
        false
      );
    }, 1000); // Adjust the delay (1 second) as needed
  }

  const processUserMessage = (message) => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      addBotResponse("Hello! How can I assist you?");
    } else if (lowerMessage.includes("help")) {
      addBotResponse("Sure, I can help you with that. Please ask your question.");
    } else if (lowerMessage.includes("bye")) {
      addBotResponse("Goodbye! If you have more questions, feel free to return.");
    } else {
      addBotResponse("Sorry, I may not understand that. Please ask another question.");
    }
  }

  const sendMessage = () => {
    const message = messageInputRef.current.value.trim();
    if (!message) {
      return;
    }

    addMessage(message, true);
    messageInputRef.current.value = "";

    processUserMessage(message);
  }

  return (
    <div className="chat">
      <div className="chat-title">
        <h1>Chatbot X</h1>
        <h2>Predict the Future</h2>
        <figure className="avatar">
          <img src={bot} alt="Chatbot" />
        </figure>
        <div className="r-nav">
          <ul>
            <li>
              <a>X</a>
            </li>
            <li>
              <a>
                <img
                  src="		  data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMjAuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iJiMxMDU3OyYjMTA4MzsmIzEwODY7JiMxMDgxO18xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfXzQ0MDQyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMxLjk5OTMiIHkxPSI3LjI0OTMiIHgyPSIzMS45OTkzIiB5Mj0iNTcuMjczMiIgc3ByZWFkTWV0aG9kPSJyZWZsZWN0Ij4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzFBNkRGRiIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojQzgyMkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMV9fNDQwNDIpOyIgZD0iTTU3LjY0NSwzMS44NjRDNTcuMjg5LDMxLjMyMyw1Ni43MDYsMzEsNTYuMDg3LDMxaC0yLjExMUM1My40NDksMTgsNDIuODk4LDcuOTk5LDMwLDcuOTk5ICBDMTYuNzY2LDcuOTk5LDUuOTk5LDE4Ljc2Niw1Ljk5OSwzMlMxNi43NjYsNTYuMDAxLDMwLDU2LjAwMWM2LjI2NywwLDEyLjE5Ni0yLjQsMTYuNjk2LTYuNzU5bC0xLjM5MS0xLjQzOCAgQzQxLjE4LDUxLjgsMzUuNzQ0LDU0LjAwMSwzMCw1NC4wMDFDMTcuODY5LDU0LjAwMSw3Ljk5OSw0NC4xMzEsNy45OTksMzJTMTcuODY5LDkuOTk5LDMwLDkuOTk5QzQxLjc5Niw5Ljk5OSw1MS40NSwyMCw1MS45NzUsMzEgIGgtMi4wNjFjLTAuNjE5LDAtMS4yMDIsMC4zMjMtMS41NTksMC44NjRjLTAuMzk3LDAuNjA1LTAuNDY2LDEuMzk3LTAuMTc3LDIuMDY5bDIuMjY4LDUuMjgzYzAuNDcyLDEuMSwxLjQ1LDEuNzgzLDIuNTU0LDEuNzgzICBjMS4xMDQsMCwyLjA4Mi0wLjY4NCwyLjU1NC0xLjc4M2wyLjI2OC01LjI4M0M1OC4xMTEsMzMuMjYyLDU4LjA0MywzMi40NjksNTcuNjQ1LDMxLjg2NHogTTU1Ljk4NCwzMy4xNDVsLTIuMjY4LDUuMjgzICBjLTAuMzEzLDAuNzI3LTEuMTE5LDAuNzI3LTEuNDMyLDBsLTIuMjY4LTUuMjgzQzQ5Ljk5MywzMy4wODksNTAsMzMuMDM1LDUwLjAxLDMzaDUuOTgxQzU2LjAwMiwzMy4wMzUsNTYuMDA4LDMzLjA4OSw1NS45ODQsMzMuMTQ1ICB6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl9fNDQwNDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzAiIHkxPSI3LjI0OTMiIHgyPSIzMCIgeTI9IjU3LjI3MzIiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQTZERkYiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0M4MjJGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzJfXzQ0MDQyKTsiIGQ9Ik0yOS44NjQsMjQuNjQ0YzAuMzU1LDAuMjM0LDAuNzc2LDAuMzU0LDEuMTk5LDAuMzU0YzAuMjk2LDAsMC41OTMtMC4wNTgsMC44NjktMC4xNzcgIGw1LjI4NC0yLjI2OEMzOC4zMTcsMjIuMDgyLDM5LDIxLjEwMywzOSwyMHMtMC42ODQtMi4wODItMS43ODMtMi41NTRsLTUuMjg0LTIuMjY4Yy0wLjY3MS0wLjI4OC0xLjQ2NC0wLjIyMS0yLjA2OCwwLjE3NyAgQzI5LjMyMywxNS43MTEsMjksMTYuMjkzLDI5LDE2LjkxM3YyLjEzOEMyMiwxOS41NjQsMTcsMjUuMTY5LDE3LDMyYzAsNy4xNjgsNS44MzIsMTMsMTMsMTNzMTMtNiwxMy0xM2gtMmMwLDYtNC45MzUsMTEtMTEsMTEgIHMtMTEtNC45MzUtMTEtMTFjMC01LjcyOCw0LTEwLjQ0MiwxMC0xMC45NXYyLjAzNkMyOSwyMy43MDYsMjkuMzIzLDI0LjI4OCwyOS44NjQsMjQuNjQ0eiBNMzEsMTcuMDA5ICBjMC0wLjAxMiwwLjA4Ny0wLjAxNywwLjE0NCwwLjAwN2w1LjI4NCwyLjI2OEMzNi43OTEsMTkuNDQsMzcsMTkuNzAxLDM3LDIwYzAsMC4yOTktMC4yMDksMC41Ni0wLjU3MiwwLjcxNmwtNS4yODQsMi4yNjggIEMzMS4wODcsMjMuMDA3LDMxLDIzLjAwMiwzMSwyMi45OVYxNy4wMDl6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfM19fNDQwNDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjkuOTk5OSIgeTE9IjI2Ljk5OTkiIHgyPSIyOS45OTk5IiB5Mj0iMzcuNzYxOCIgc3ByZWFkTWV0aG9kPSJyZWZsZWN0Ij4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzZEQzdGRiIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRTZBQkZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjaXJjbGUgc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8zX180NDA0Mik7IiBjeD0iMzAiIGN5PSIzMiIgcj0iNCIvPgo8L3N2Zz4K

                  "
                  width="26px"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? "message-personal" : ""}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-box">
        <input
          type="text"
          className="message-input"
          placeholder="Type message..."
          ref={messageInputRef}
        />
        <button
          type="button"
          className="message-submit sound-on-click"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatApp;
