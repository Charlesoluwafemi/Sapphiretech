// FetchMessages.js
import React, { useEffect, useState, useCallback } from 'react';

const FetchMessages = ({ token }) => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = useCallback(async () => {
        const response = await fetch('http://127.0.0.1:8000/chat/messages/', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            setMessages(data);
        } else {
            console.error('Failed to fetch messages');
        }
    }, [token]); // Memoize the fetchMessages function

    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]); // Now no warning!

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

