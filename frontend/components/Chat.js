// src/components/Chat.js

import React, { useState, useEffect } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const yourAuthToken = 'YOUR_AUTH_TOKEN_HERE'; // Replace with your actual token

    const sendMessage = async (message) => {
        const response = await fetch('http://127.0.0.1:8000/chat/send/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${yourAuthToken}`,
            },
            body: JSON.stringify(message),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Message sent:', data);
            // Optionally, refresh the messages after sending
            fetchMessages();
        } else {
            console.error('Failed to send message');
        }
    };

    const fetchMessages = async () => {
        const response = await fetch('http://127.0.0.1:8000/chat/messages/', {
            headers: {
                'Authorization': `Bearer ${yourAuthToken}`,
            },
        });

        if (response.ok) {
            const messages = await response.json();
            setMessages(messages);
            console.log('Messages:', messages);
        } else {
            console.error('Failed to fetch messages');
        }
    };

    useEffect(() => {
        fetchMessages(); // Fetch messages when the component mounts
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage({ message: inputMessage }); // Adjust the message object as per your model
        setInputMessage(''); // Clear input field
    };

    return (
        <div>
            <h1>Chat</h1>
            <ul>
                {messages.map((msg) => (
                    <li key={msg.id}>{msg.sender}: {msg.message}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;
