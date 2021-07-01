import { ChatEngine } from "react-chat-engine";
import "./App.css";

import ChatFeed from "./components/ChatFeed";

function App() {
  const PROJECT_ID = process.env.REACT_APP_CHAT;
  const USER_SECRET = process.env.REACT_APP_USERSECRET;
  return (
    <ChatEngine
      height="100vh"
      projectID={PROJECT_ID}
      userName="majidalykhan"
      userSecret={USER_SECRET}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
