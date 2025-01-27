// SendMessage.js
import React, { useState } from 'react';

const SendMessage = ({ token }) => {
    const [message, setMessage] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://127.0.0.1:8000/chat/send/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Include your auth token
            },
            body: JSON.stringify({ message }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Message sent:', data);
            setMessage(''); // Clear input after sending
        } else {
            console.error('Failed to send message');
        }
    };

    return (
        <form onSubmit={sendMessage}>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Type your message..." 
                required 
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default SendMessage;
