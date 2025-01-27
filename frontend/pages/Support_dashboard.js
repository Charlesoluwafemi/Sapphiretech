import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SupportDashboard = () => {
    const [messages, setMessages] = useState([]);
    const [reply, setReply] = useState('');
    const [selectedMessageId, setSelectedMessageId] = useState(null); // Updated for clarity

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/support-messages/'); // Added http://
            setMessages(response.data);
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };

    const handleReply = async (messageId) => {
        try {
            await axios.patch(`http://localhost:8000/api/support-messages/${messageId}/`, { response: reply, is_replied: true });
            setReply('');
            setSelectedMessageId(null); // Clear selected message after replying
            fetchMessages();
        } catch (error) {
            console.error("Error sending reply:", error);
        }
    };

    return (
        <div>
            <h1>Support Dashboard</h1>
            {messages.map((msg) => (
                <div key={msg.id}>
                    <p>User: {msg.user_message}</p>
                    {msg.response ? <p>Support: {msg.response}</p> : null}
                    <input
                        type="text"
                        placeholder="Reply here"
                        value={selectedMessageId === msg.id ? reply : ''}
                        onChange={(e) => {
                            setReply(e.target.value);
                            setSelectedMessageId(msg.id); // Update selected message
                        }}
                    />
                    <button onClick={() => handleReply(msg.id)}>Send Reply</button>
                </div>
            ))}
        </div>
    );
};

export default SupportDashboard;
