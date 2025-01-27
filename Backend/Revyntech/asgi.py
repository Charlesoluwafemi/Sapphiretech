# R
import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from Revynapp.routing import websocket_urlpatterns  # Import WebSocket URLs

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Revyntech.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            websocket_urlpatterns  # Correctly import all WebSocket paths here
        )
    ),
})
