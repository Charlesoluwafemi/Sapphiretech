from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogPostViewSet
from django.conf import settings
from django.conf.urls.static import static
from .views import send_consultation
from .views import ChatBotView
from .views import SendMessageView, RetrieveMessagesView, AdminSendMessageView, AdminRetrieveMessagesView
from .views import CustomAuthToken
from .views import auth_view
from .views import send_message, get_messages, schedule_consultation
from .views import SupportMessageViewSet
from . import views

router = DefaultRouter()
router.register(r'posts', BlogPostViewSet)
router.register(r'support-messages', SupportMessageViewSet)

urlpatterns = [
    path('api/', include(router.urls)),  # This includes the support messages and blog posts URLs
    path('api/send-consultation/', send_consultation, name='send_consultation'),
    path('chatbot/', ChatBotView.as_view(), name='chatbot'),
    path('chat/messages/', RetrieveMessagesView.as_view(), name='retrieve_messages'),
    path('chat/send/', SendMessageView.as_view(), name='send_message'),
    path('chat/admin/send/', AdminSendMessageView.as_view(), name='admin_send_message'),
    path('chat/admin/messages/', AdminRetrieveMessagesView.as_view(), name='admin_retrieve_messages'),
    path('api-token-auth/', auth_view, name='api_token_auth'),
    path('send_message/', send_message, name='send_message'),
    path('get_messages/', get_messages, name='get_messages'),
    path('api/schedule-consultation/', views.schedule_consultation, name='schedule_consultation'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    print("Serving media files from: ", settings.MEDIA_ROOT)  # Debug line
