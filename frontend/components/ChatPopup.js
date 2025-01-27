import { useEffect, useState } from 'react';

const ChatPopup = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(true); // Chat window is open by default
    const [isLoading, setIsLoading] = useState(false); // Loading state for responses
    const [socket, setSocket] = useState(null); // WebSocket instance for live chat

    useEffect(() => {
        // Cleanup the WebSocket connection when the component unmounts
        return () => {
            if (socket) {
                socket.close();
            }
        };
    }, [socket]);

    const sendMessage = async () => {
        if (input.trim()) {
            // Add the user's message to the chat
            const userMessage = `You: ${input}`;
            setMessages((prevMessages) => [...prevMessages, userMessage]);

            // Clear input field
            setInput('');

            // Set loading state to true
            setIsLoading(true);

            try {
                // Make a POST request to the chatbot API
                const response = await fetch('http://127.0.0.1:8000/chatbot/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: input }),
                });

                const data = await response.json();
                // Add the bot's response to the chat
                setMessages((prevMessages) => [...prevMessages, `Bot: ${data.response}`]);

                // Check if the response suggests connecting with support
                if (data.response.toLowerCase().includes("connect with support")) {
                    handleSupportConnection();
                }
            } catch (error) {
                console.error('Error sending message:', error);
            } finally {
                // Reset loading state
                setIsLoading(false);
            }
        }
    };

    const handleSupportConnection = () => {
        const supportMessage = "It seems I cannot assist you with that. Connecting you to support...";
        setMessages((prevMessages) => [...prevMessages, supportMessage]);

        // Initialize WebSocket connection to support after suggesting connection
        const newSocket = new WebSocket('ws://127.0.0.1:8000/ws/support/');

        newSocket.onopen = () => {
            console.log('Connected to support via WebSocket');
        };

        newSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("Incoming message from support:", data.message);
            // Add the support's message to the chat
            setMessages((prevMessages) => [...prevMessages, `Support: ${data.message}`]);
        };

        newSocket.onclose = () => {
            console.log('WebSocket connection to support closed');
        };

        newSocket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        setSocket(newSocket);
    };

    const sendMessageToSupport = () => {
        if (input.trim() && socket) {
            const userMessage = `You: ${input}`;
            setMessages((prevMessages) => [...prevMessages, userMessage]);

            // Clear input field
            setInput('');

            // Send message to WebSocket
            socket.send(JSON.stringify({ message: input }));
        }
    };

    return (
        <div className={`fixed bottom-5 right-5 w-80 bg-white border border-gray-300 shadow-lg rounded-lg transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="bg-blue-500 text-white p-3 flex justify-between items-center rounded-t-lg">
                <h2 className="font-bold">Chat with Us</h2>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white hover:bg-blue-700 rounded-full p-1"
                    aria-expanded={isOpen}
                >
                    {isOpen ? 'Close' : 'Open'}
                </button>
            </div>
            {isOpen && (
                <div className="p-3 h-64 overflow-y-auto">
                    <div className="mb-2">
                        {messages.map((msg, index) => (
                            <div key={index} className="mb-1 text-gray-800">
                                {msg}
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && (socket ? sendMessageToSupport() : sendMessage())}
                            className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
                            placeholder="Type a message..."
                        />
                        <button
                            onClick={socket ? sendMessageToSupport : sendMessage}
                            className={`bg-blue-500 text-white rounded-lg p-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatPopup;
