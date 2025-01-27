# myapp/views.py

from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import render
from .models import BlogPost
from .serializers import BlogPostSerializer
from rest_framework.decorators import api_view


# views.py
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import logging

logger = logging.getLogger(__name__)
@csrf_exempt  # Disable CSRF protection for now (not recommended in production)
def send_consultation(request):
    if request.method == 'POST':
        try:
            logger.info("Received a POST request for consultation.")

            # Determine the content type of the request
            if request.content_type == 'application/json':
                logger.info("Parsing JSON request body.")
                data = json.loads(request.body)
            else:
                logger.info("Parsing form-encoded request body.")
                data = request.POST  # For form data

            full_name = data.get('fullName')
            email = data.get('email')
            project_details = data.get('projectDetails')

            logger.info("Extracted data: %s, %s, %s", full_name, email, project_details)

            # Validate input data
            if not full_name or not email or not project_details:
                logger.warning("Validation failed: missing fields.")
                return JsonResponse({'success': False, 'message': 'All fields are required'}, status=400)

            # Send the email
            send_mail(
                subject=f"Consultation Request from {full_name}",
                message=f"Name: {full_name}\nEmail: {email}\nProject Details: {project_details}",
                from_email='charlesoluwafemi02@gmail.com',  # Your Gmail address
                recipient_list=['copywriter188@gmail.com'],  # Change to your email or desired recipient
            )
            logger.info("Email sent successfully.")
            return JsonResponse({'success': True, 'message': 'Email sent successfully'}, status=200)
        except json.JSONDecodeError:
            logger.error("Invalid JSON format", exc_info=True)
            return JsonResponse({'success': False, 'message': 'Invalid JSON format'}, status=400)
        except Exception as e:
            logger.error("An error occurred: %s", str(e), exc_info=True)
            return JsonResponse({'success': False, 'message': 'An error occurred, please try again later.'}, status=500)

    logger.warning("Invalid request method.")
    return JsonResponse({'error': 'Invalid request method'}, status=405)

from rest_framework import viewsets
from rest_framework.response import Response
from .models import BlogPost
from .serializers import BlogPostSerializer
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes
import docx

from rest_framework.response import Response
import docx
from bs4 import BeautifulSoup  # To handle HTML rendering for SEO
import bleach
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from docx import Document

class BlogPostViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]  # Allow access to all users
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=201)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        blog_posts = []

        for post in queryset:
            file_content = None
            if post.file:  # Check if the file exists
                file_content = self.get_docx_content(post.file.path)  # Read the content of the file and convert to HTML

            # SEO: Wrap meta_title, meta_description, and keywords
            meta_tags = self.generate_meta_tags(post.meta_title, post.meta_description, post.keywords)

            blog_posts.append({
                'id': post.id,
                'title': post.title,
                'image': post.image.url if post.image else None,
                'file': post.file.url if post.file else None,
                'file_content': file_content,  # Ensure content is in HTML format
                'meta_title': post.meta_title,
                'meta_description': post.meta_description,
                'created_at': post.created_at,
                'keywords': post.keywords,
                'meta_tags': meta_tags,  # Add meta tags for SEO
            })

        return Response(blog_posts)

    @staticmethod
    def get_docx_content(file_path):
        # Read content from the DOCX file and convert to HTML
        doc = Document(file_path)
        html_content = ""
        for para in doc.paragraphs:
            html_content += f"<p>{para.text}</p>"

        # Sanitize the HTML content to remove unwanted tags
        allowed_tags = ['p', 'strong', 'em', 'ul', 'li', 'ol', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br']
        cleaned_content = bleach.clean(html_content, tags=allowed_tags, strip=True)

        return cleaned_content

    @staticmethod
    def generate_meta_tags(meta_title, meta_description, keywords):
        # Generate meta tags for SEO
        soup = BeautifulSoup("", "html.parser")
        if meta_title:
            title_tag = soup.new_tag("title")
            title_tag.string = meta_title
            soup.append(title_tag)

        if meta_description:
            meta_desc_tag = soup.new_tag("meta", content=meta_description)
            meta_desc_tag["name"] = "description"
            soup.append(meta_desc_tag)

        if keywords:
            meta_keywords_tag = soup.new_tag("meta", content=keywords)
            meta_keywords_tag["name"] = "keywords"
            soup.append(meta_keywords_tag)

        return str(soup)

# views.py
from .models import Consultation
from .serializers import ConsultationSerializer
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
import json
import logging
from django.core.mail import send_mail

# Set up logging
logger = logging.getLogger(__name__)
@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def schedule_consultationss(request):
    if request.method == 'POST':
        try:
            # Log request headers and body
            logger.info("Request Headers: %s", request.headers)
            logger.info("Raw Body: %s", request.body)

            # Check content type and load data accordingly
            if request.content_type == 'application/json':
                data = json.loads(request.body)
            else:
                data = request.POST  # For form-encoded data

            logger.info("Parsed Data: %s", data)

            # Extract fields
            name = data.get('name')
            email = data.get('email')
            phone = data.get('phone')
            demoDate = data.get('demoDate')

            # Validate fields
            missing_fields = [field for field in ['name', 'email', 'phone', 'demoDate'] if not data.get(field)]
            if missing_fields:
                logger.error("Missing fields: %s", missing_fields)
                return JsonResponse({'success': False, 'message': f'Missing fields: {', '.join(missing_fields)}'}, status=400)

            # Email logic here...

            return JsonResponse({'success': True, 'message': 'Consultation scheduled successfully!'}, status=200)
        except json.JSONDecodeError:
            logger.error("Invalid JSON format", exc_info=True)
            return JsonResponse({'success': False, 'message': 'Invalid JSON format'}, status=400)
        except Exception as e:
            logger.error("An error occurred: %s", str(e), exc_info=True)
            return JsonResponse({'success': False, 'message': 'An error occurred, please try again later.'}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


import json
import logging
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail

# Set up logging
logger = logging.getLogger(__name__)

@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def schedule_consultation(request):
    try:
        # Log incoming request for debugging
        logger.info(f"Request Method: {request.method}")
        logger.info(f"Request Headers: {request.headers}")
        logger.info(f"Request Content-Type: {request.content_type}")
        logger.info(f"Request Body: {request.body}")

        # Parse request data
        def parse_request_data():
            if request.content_type == 'application/json':
                try:
                    return json.loads(request.body.decode('utf-8'))
                except json.JSONDecodeError as e:
                    logger.error(f"JSON Decode Error: {str(e)}")
                    raise ValueError('Invalid JSON format')
            elif request.content_type in ['application/x-www-form-urlencoded', 'multipart/form-data']:
                return request.POST.dict()
            elif request.content_type == 'text/plain':
                return {"data": request.body.decode('utf-8')}
            elif request.content_type in ['application/xml', 'text/xml']:
                try:
                    from xml.etree import ElementTree as ET
                    xml_data = ET.fromstring(request.body.decode('utf-8'))
                    return {child.tag: child.text for child in xml_data}
                except ET.ParseError as e:
                    logger.error(f"XML Parsing Error: {str(e)}")
                    raise ValueError('Invalid XML format')
            else:
                logger.warning(f"Unsupported Content-Type: {request.content_type}")
                raise ValueError('Unsupported Content-Type')

        try:
            data = parse_request_data()
            logger.info(f"Parsed Data: {data}")
        except ValueError as e:
            return JsonResponse({'success': False, 'message': str(e)}, status=400)

        # Extract and validate fields
        required_fields = ['name', 'email', 'phone', 'demoDate']
        missing_fields = [field for field in required_fields if field not in data or not data[field].strip()]
        if missing_fields:
            logger.error(f"Missing fields: {', '.join(missing_fields)}")
            return JsonResponse({'success': False, 'message': f'Missing fields: {", ".join(missing_fields)}'}, status=400)

        name, email, phone, demoDate = map(lambda field: data[field].strip(), required_fields)

        # Validate email format
        if '@' not in email or '.' not in email:
            logger.error(f"Invalid email format: {email}")
            return JsonResponse({'success': False, 'message': 'Invalid email format'}, status=400)

        # Validate phone number format
        import re
        phone_pattern = re.compile(r'^\+?\d{7,15}$')  # E.164 format (optional "+" followed by 7-15 digits)
        phone = phone.replace(" ", "").replace("-", "").replace("(", "").replace(")", "")  # Normalize
        if not phone_pattern.match(phone):
            logger.error(f"Invalid phone number: {phone}")
            return JsonResponse({'success': False, 'message': 'Invalid phone number format. Use E.164 format (e.g., +1234567890).'}, status=400)

        # Prepare and send emails
        try:
            send_mail(
                subject="New Consultation Scheduled",
                message=f"You have a new consultation scheduled:\n\nName: {name}\nEmail: {email}\nPhone: {phone}\nConsultation Date: {demoDate}",
                from_email='your_email@example.com',
                recipient_list=['your_email@example.com'],
                fail_silently=False,
            )
            logger.info("Admin email sent successfully.")
        except Exception as e:
            logger.error(f"Failed to send admin email: {str(e)}")

        try:
            send_mail(
                subject=f"Consultation Scheduled for {name}",
                message=f"Hello {name},\nYour consultation is scheduled for {demoDate}.\nThank you for choosing our service!",
                from_email='your_email@example.com',
                recipient_list=[email],
                fail_silently=False,
            )
            logger.info(f"Confirmation email sent to {email}.")
        except Exception as e:
            logger.error(f"Failed to send user email: {str(e)}")

        # Return success response
        return JsonResponse({'success': True, 'message': 'Consultation scheduled successfully!'}, status=200)

    except Exception as e:
        logger.exception(f"Unexpected error: {str(e)}")
        return JsonResponse({'success': False, 'message': 'An error occurred. Please try again later.'}, status=500)

import random
import re
import logging
from django.conf import settings
from django.core.mail import send_mail
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ChatMessageSerializer
from .models import SupportMessage  # Ensure you have the appropriate import for your model

logger = logging.getLogger(__name__)

class ChatBotView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ChatMessageSerializer(data=request.data)
        if serializer.is_valid():
            user_input = serializer.validated_data['message']
            logger.info(f"User input: {user_input}")

            # Save the user message to the database
            SupportMessage.objects.create(user_message=user_input)

            response = self.generate_response(user_input)
            logger.info(f"Generated response: {response}")

            return Response({"response": response}, status=status.HTTP_200_OK)
        
        logger.error(f"Serializer errors: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def generate_response(self, user_input):
        intent = self.identify_intent(user_input)

        responses = {
            "greeting": [
                "Hello! How can I assist you?",
                "Hi there! What do you need help with?",
                "Greetings! How can I help you today?",
                "Hey! What can I do for you?",
                "Hello! What questions do you have?"
            ],
            "goodbye": [
                "Goodbye! Have a great day!",
                "See you later! Take care!",
                "Farewell! Come back anytime!",
                "Goodbye! Wishing you all the best!",
                "See you next time!"
            ],
            "help": [
                "I am here to help! What do you need assistance with?",
                "How can I assist you today?",
                "Feel free to ask me anything!",
                "I'm here to help you out!",
                "What can I help you with right now?"
            ],
            "connect": [
                "Connecting you to a human agent...",
                "I will transfer you to a human agent shortly.",
                "Please hold on while I connect you with a human representative.",
                "A human agent will assist you in just a moment.",
                "Connecting you now. Please wait..."
            ],
            "order_status": [
                "Could you please provide your order number?",
                "I can help you with that! Please tell me your order number.",
                "Let me check your order status. What's your order ID?",
                "What is your order number? I'll find that information for you.",
                "Please provide your order number for assistance."
            ],
            "product_info": [
                "Can you tell me which product you are interested in?",
                "Which product would you like more information about?",
                "Please specify the product name for detailed information.",
                "What product do you want to know about?",
                "I can help with product information. Which one do you have in mind?"
            ],
            "feedback": [
                "We appreciate your feedback! What would you like to share?",
                "Your opinion matters! Please provide your feedback.",
                "I'm all ears! What feedback do you have for us?",
                "Let us know how we're doing! What feedback can you share?",
                "We're here to improve. What feedback can you share?"
            ],
            "complaint": [
                "I'm sorry to hear that you're facing an issue. Can you please elaborate?",
                "Your concern is important to us. Please describe the problem.",
                "I'm here to help! What seems to be the problem?",
                "I understand that this is frustrating. Please provide details.",
                "Let us help you with that! Can you explain your complaint?"
            ],
            "hours": [
                "We are open from 9 AM to 5 PM, Monday to Friday.",
                "Our business hours are 9 AM to 5 PM, weekdays only.",
                "You can reach us from 9 AM to 5 PM, Monday through Friday.",
                "Our hours of operation are 9 AM to 5 PM on weekdays.",
                "We are available to assist you from 9 AM to 5 PM, Monday to Friday."
            ],
            "location": [
                "We are located at 123 Main St, Cityville.",
                "Our office is at 123 Main St, Cityville.",
                "You can find us at 123 Main St, Cityville.",
                "We are situated at 123 Main St, Cityville. Come visit us!",
                "Our address is 123 Main St, Cityville. Feel free to stop by!"
            ],
            "pricing": [
                "Our pricing varies by product. Could you specify which product?",
                "Can you please let me know which product you're interested in for pricing?",
                "For pricing details, please tell me which product you want to inquire about.",
                "What product are you asking about for pricing information?",
                "I can provide pricing information. Which product do you have in mind?"
            ],
            "support": [
                "You can reach our support team at support@example.com.",
                "For support, please contact us at support@example.com.",
                "Need help? Email our support team at support@example.com.",
                "Our support team is available at support@example.com.",
                "For assistance, reach out to support@example.com."
            ],
            "default": [
                "I'm sorry, I didn't understand that. Can you please rephrase?",
                "Could you clarify what you mean? I'm here to help!",
                "I'm not sure I understand. Can you elaborate?",
                "That's an interesting point. Can you explain further?",
                "I didn't quite catch that. What do you mean?",
                "I’m sorry, I’m not able to assist with that. Would you like to connect with support?"
            ]
        }

        if intent == "default":
            self.notify_support(user_input)
            return random.choice(responses["default"]) + " " + random.choice(responses["connect"])

        return random.choice(responses.get(intent, responses["default"]))

    def notify_support(self, user_input):
        subject = "User Request for Support"
        message = f"A user requested support with the following input: {user_input}"
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [settings.EMAIL_HOST_USER]
        send_mail(subject, message, from_email, recipient_list)

    def identify_intent(self, user_input):
        user_input = user_input.lower()
        if re.search(r'\b(hi|hello|hey|greetings|howdy)\b', user_input):
            return "greeting"
        elif re.search(r'\b(goodbye|bye|see you|later)\b', user_input):
            return "goodbye"
        elif re.search(r'\b(help|assistance|support)\b', user_input):
            return "help"
        elif re.search(r'\b(connect|talk to a human|agent)\b', user_input):
            return "connect"
        elif re.search(r'\b(order|status|tracking)\b', user_input):
            return "order_status"
        elif re.search(r'\b(product|info|details)\b', user_input):
            return "product_info"
        elif re.search(r'\b(feedback|comment|suggestion)\b', user_input):
            return "feedback"
        elif re.search(r'\b(complaint|issue|problem)\b', user_input):
            return "complaint"
        elif re.search(r'\b(hours|open|closing)\b', user_input):
            return "hours"
        elif re.search(r'\b(location|address|find)\b', user_input):
            return "location"
        elif re.search(r'\b(pricing|cost|price)\b', user_input):
            return "pricing"
        else:
            return "default"


from rest_framework import generics
from .models import ChatMessage
from .serializers import ChatMessageSerializer
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAdminUser  # Import your custom permission

from django.contrib.auth import authenticate
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import ChatMessage
from .serializers import ChatMessageSerializer
from rest_framework.authtoken.models import Token

class SendMessageView(generics.GenericAPIView):
    permission_classes = [AllowAny]  # Allow all users to access the form

    def get(self, request, *args, **kwargs):
        # Render the template with the form to input username, password, and token
        return render(request, 'Revynapp/send_message.html', {'validated': False})

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        token_key = request.data.get('token')

        # Authenticate the user
        user = authenticate(request, username=username, password=password)

        if user is not None:
            try:
                # Check if the token is valid for the user
                token = Token.objects.get(user=user)
                if token.key == token_key:
                    # User is validated, render the form to send a message
                    return render(request, 'Revynapp/send_message_form.html', {
                        'validated': True,
                        'username': username,
                        'token': token_key,
                    })
                else:
                    # Invalid token
                    return render(request, 'Revynapp/send_message.html', {
                        'validated': False,
                        'message': 'Invalid token. Please try again.',
                    })
            except Token.DoesNotExist:
                # Token does not exist for the user
                return render(request, 'Revynapp/send_message.html', {
                    'validated': False,
                    'message': 'Token not found for this user. Please try again.',
                })
        # Invalid username or password
        return render(request, 'Revynapp/send_message.html', {
            'validated': False,
            'message': 'Invalid username or password. Please try again.',
        })

    def send_message(self, request, username, token_key):
        message_content = request.data.get('message')

        # Get the user again
        user = authenticate(request, username=username, password=request.data.get('password'))

        if user is not None:
            # Proceed to send the message
            serializer = ChatMessageSerializer(data={'message': message_content, 'user': user.id})
            if serializer.is_valid():
                serializer.save()  # Save the message
                return Response({'message': 'Message sent successfully!'}, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'error': 'Authentication failed.'}, status=status.HTTP_401_UNAUTHORIZED)

# views.py

class RetrieveMessagesView(generics.ListAPIView):
    permission_classes = [AllowAny]  # Allow any user to access this view
    serializer_class = ChatMessageSerializer

    def get_queryset(self):
        # Return all chat messages, sorted by timestamp
        return ChatMessage.objects.all().order_by('-timestamp')


class AdminSendMessageView(generics.CreateAPIView):
    """
    This view allows only admin users to send messages.
    """
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer
    permission_classes = [IsAdminUser]  # Only admin users can send messages

class AdminRetrieveMessagesView(generics.ListAPIView):
    """
    This view allows only admin users to retrieve messages.
    """
    serializer_class = ChatMessageSerializer
    permission_classes = [IsAdminUser]  # Only admin users can retrieve messages

    def get_queryset(self):
        # Admin can see all messages
        return ChatMessage.objects.all()
# views.py

# views.py
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.authentication import BasicAuthentication
from .serializers import AuthTokenSerializer

class CustomAuthToken(ObtainAuthToken):
    """
    Custom view to handle authentication and return a token.
    """
    serializer_class = AuthTokenSerializer
    permission_classes = [AllowAny]
    authentication_classes = [BasicAuthentication]

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})

    def get(self, request):
        # Manually parse credentials from the request headers
        username = request.GET.get('username')
        password = request.GET.get('password')
        
        if not username or not password:
            return Response({"detail": "Please provide both username and password."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(username=username)
            if user.check_password(password):
                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key})
            else:
                return Response({"detail": "Invalid credentials."}, status=status.HTTP_401_UNAUTHORIZED)
        except User.DoesNotExist:
            return Response({"detail": "User does not exist."}, status=status.HTTP_404_NOT_FOUND)


from django.shortcuts import render
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse

def auth_view(request):
    message = None  # Initialize message variable

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        # Authenticate the user
        user = authenticate(request, username=username, password=password)
        if user is not None:
            # If authentication is successful, get or create a token
            token, created = Token.objects.get_or_create(user=user)
            message = f'Authentication successful! Your token: {token.key}'
            return render(request, 'Revynapp/auth.html', {'message': message})
        else:
            # If authentication fails, display an error message
            message = 'Invalid username or password.'
    
    # Render the login form for both GET and POST requests
    return render(request, 'Revynapp/auth.html', {'message': message})





from rest_framework.decorators import api_view
@api_view(['POST'])
def send_message(request):
    serializer = ChatMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_messages(request):
    messages = ChatMessage.objects.all().order_by('-timestamp')  # Fetch messages
    serializer = ChatMessageSerializer(messages, many=True)
    return Response(serializer.data)



# views.py
from rest_framework import viewsets
from .models import SupportMessage
from .serializers import SupportMessageSerializer
from rest_framework.permissions import AllowAny

class SupportMessageViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = SupportMessage.objects.all()
    serializer_class = SupportMessageSerializer
