// FetchMessages.js
import React, { useEffect, useState } from 'react';

const FetchMessages = ({ token }) => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        const response = await fetch('http://127.0.0.1:8000/chat/messages/', {
            headers: {
                'Authorization': `Bearer ${token}`, // Include your auth token
            },
        });

        if (response.ok) {
            const data = await response.json();
            setMessages(data);
        } else {
            console.error('Failed to fetch messages');
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []); // Fetch messages when the component mounts

    return (
        <div>
            <h2>Chat Messages</h2>
            <ul>
                {messages.map((msg) => (
                    <li key={msg.id}>{msg.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default FetchMessages;
