
from django.db import models
from django.contrib.auth.models import User



class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    file = models.FileField(upload_to='files/', null=True, blank=True)
    meta_title = models.CharField(max_length=200, null=True, blank=True)
    meta_description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)  # Automatically set on creation
    keywords = models.CharField(max_length=200, null=True, blank=True)
    

    def __str__(self):
        return self.title


class UserMessage(models.Model):
    message = models.TextField()
    intent = models.CharField(max_length=50)
    response = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message[:50]  # Display first 50 characters of the message

class ChatbotResponse(models.Model):
    intent = models.CharField(max_length=50, unique=True)
    responses = models.JSONField()  # To store multiple responses as a list

    def __str__(self):
        return self.intent

class ChatMessage(models.Model):
    sender = models.ForeignKey(User, related_name='sent_messages', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='received_messages', on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender} to {self.receiver}: {self.message}"


class UserProfile(models.Model):
    username = models.CharField(max_length=100)
    # Add any other user-related fields as necessary
class SupportMessage(models.Model):
    user_message = models.TextField()
    response = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_replied = models.BooleanField(default=False)

    def __str__(self):
        return f'Message from user: {self.user_message}'


class Consultation(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    date = models.DateTimeField(auto_now_add=True)
    # Add other fields as necessary
  
    def __str__(self):
        return f"Consultation with {self.name} on {self.date}"
