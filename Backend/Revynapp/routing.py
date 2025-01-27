# revynapp/routing.py

from django.urls import re_path
from .consumers import ChatConsumer, SupportConsumer  # Make sure you have the correct import for your consumers

websocket_urlpatterns = [
    re_path(r'ws/chat/$', ChatConsumer.as_asgi()),  # Ensure this path matches the one in your frontend
    re_path(r'ws/support/$', SupportConsumer.as_asgi()),
]
