import { ChatEngine } from 'react-chat-engine';
import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App = () => {
    const storedUsername = localStorage.getItem('username');

    if (!storedUsername) {
        console.log('Rendering LoginForm'); // Log to check if LoginForm is being rendered
        return <LoginForm />;
    }

    try {
        return (
            <ChatEngine
                height="100vh"
                projectID="0e05009d-4c2b-4866-9ded-02e1ce6427cc"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />
        );
    } catch (error) {
        console.error('Error rendering ChatEngine:', error); // Log any rendering errors
        return <div>Error rendering ChatEngine</div>; // Return a fallback UI or handle the error as needed
    }
};

export default App;
