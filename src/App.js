import { ChatEngine } from 'react-chat-engine';
import './App.css';
import React from 'react'
import ChatFeed from './components/ChatFeed';
const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="
0e05009d-4c2b-4866-9ded-02e1ce6427cc"
            userName="Prerana"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}
export default App
