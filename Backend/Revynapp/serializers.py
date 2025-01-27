# serializers.py

from rest_framework import serializers
from .models import BlogPost
from docx import Document
from .models import ChatMessage
from .models import UserProfile

class BlogPostSerializer(serializers.ModelSerializer):
    file_content = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'image', 'file', 'meta_title', 'meta_description', 'created_at', 'keywords', 'file_content']

    def get_file_content(self, obj):
        if obj.file:
            try:
                doc = Document(obj.file.path)
                content = "\n".join([para.text for para in doc.paragraphs])
                return content
            except Exception as e:
                return str(e)
        return None


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'username']  # Include the fields you want to expose


class ChatMessageSerializer(serializers.Serializer):
    message = serializers.CharField(max_length=200)  # Adjust max_length as needed



# serializers.py

from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class AuthTokenSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')
        user = authenticate(username=username, password=password)

        if user is None:
            raise serializers.ValidationError('Invalid credentials')
        
        attrs['user'] = user
        return attrs

from rest_framework import serializers
from .models import SupportMessage  # Ensure this line is present

class SupportMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportMessage
        fields = ['id', 'user_message', 'created_at']  # Adjust fields as necessary
from rest_framework import serializers
from .models import Consultation

class ConsultationSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    phone = serializers.CharField(required=True)  # Accept any string input
    date = serializers.CharField(required=True)  # Accept any string input (you can validate this later)

    class Meta:
        model = Consultation
        fields = ['name', 'email', 'phone', 'date']

    def validate_date(self, value):
        """
        Custom validation to check if the date is in the correct format.
        """
        try:
            # Attempt to parse the date string to a date object
            parsed_date = serializers.DateField().to_internal_value(value)
            return parsed_date
        except serializers.ValidationError:
            raise serializers.ValidationError("Date must be in 'YYYY-MM-DD' format.")
