import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  const PROJECT_ID = process.env.REACT_APP_CHAT;
  const USER_SECRET = process.env.REACT_APP_USERSECRET;
  return (
    <ChatEngine
      height="100vh"
      projectID={PROJECT_ID}
      userName="majidalykhan"
      userSecret={USER_SECRET}
    />
  );
}

export default App;
