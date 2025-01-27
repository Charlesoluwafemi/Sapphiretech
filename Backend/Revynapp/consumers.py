import json
from channels.generic.websocket import AsyncWebsocketConsumer

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = 'chat_room'
        self.room_group_name = f'chat_{self.room_name}'

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        try:
            text_data_json = json.loads(text_data)
            message = text_data_json.get('message', '')

            # Handle the received message and determine the response
            response = self.handle_message(message)

            # Send response to room group
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'chat_message',
                    'message': response
                }
            )
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON: {e}")
            await self.send(text_data=json.dumps({
                'message': "Error processing your message. Please try again."
            }))
        except Exception as e:
            print(f"Error in WebSocket receive: {e}")
            await self.send(text_data=json.dumps({
                'message': "An error occurred. Please try again later."
            }))

    def handle_message(self, message):
        # Define automatic responses based on keywords
        message = message.lower()

        if "hello" in message or "hi" in message:
            return "Hello! How can I assist you today?"
        elif "hours" in message:
            return "Our support team is available from 9 AM to 5 PM, Monday to Friday."
        elif "price" in message:
            return "Please visit our pricing page for detailed information on our plans."
        elif "speak to support" in message or "help" in message:
            self.forward_to_support(message)  # Call method to handle forwarding
            return "I’ll forward your request to our support team, and they will get back to you shortly."
        else:
            return "I'm sorry, I didn't understand that. Can you please clarify?"

    def forward_to_support(self, message):
        # Logic to forward the message to support
        print(f"Forwarding to support: {message}")  # Replace with actual logic to notify support

    async def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))



class SupportConsumer(AsyncWebsocketConsumer):
    users = set()  # Track connected users

    async def connect(self):
        self.user_name = f"Guest{len(self.users) + 1}"  # Assign a unique guest name
        self.users.add(self.user_name)
        
        # Accept the WebSocket connection
        await self.accept()

        # Notify all users about the new connection
        await self.channel_layer.group_send(
            "support_chat",
            {
                "type": "user_connected",
                "user_name": self.user_name,
            }
        )

    async def disconnect(self, close_code):
        self.users.remove(self.user_name)
        
        # Notify all users about the disconnection
        await self.channel_layer.group_send(
            "support_chat",
            {
                "type": "user_disconnected",
                "user_name": self.user_name,
            }
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data.get('message')

        # Broadcast the message to all users
        await self.channel_layer.group_send(
            "support_chat",
            {
                "type": "chat_message",
                "user_name": self.user_name,
                "message": message,
            }
        )

    async def chat_message(self, event):
        user_name = event['user_name']
        message = event['message']

        # Send the message to WebSocket
        await self.send(text_data=json.dumps({
            'user_name': user_name,
            'message': message,
        }))

    async def user_connected(self, event):
        user_name = event['user_name']
        await self.send(text_data=json.dumps({
            'system_message': f"{user_name} has joined the chat."
        }))

    async def user_disconnected(self, event):
        user_name = event['user_name']
        await self.send(text_data=json.dumps({
            'system_message': f"{user_name} has left the chat."
        }))