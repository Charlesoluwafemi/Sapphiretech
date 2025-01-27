from django.contrib import admin
from .models import BlogPost, UserMessage, ChatbotResponse
  # Ensure you import your custom form here

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    # List display and filtering options
    list_display = ('title', 'meta_title', 'created_at', 'keywords')  # Add more fields you want to display
    list_filter = ('created_at', 'keywords')  # Add fields you want to filter by
    search_fields = ('title', 'meta_title', 'meta_description')  # Allows search in these fields

    # Ensures that the file and image fields are visible in the admin form


    # Use the custom form to enable rich text editor
    

class UserMessageAdmin(admin.ModelAdmin):
    list_display = ('message', 'intent', 'created_at')
    search_fields = ('message', 'intent')

class ChatbotResponseAdmin(admin.ModelAdmin):
    list_display = ('intent',)
    search_fields = ('intent',)

# Register the other admin classes
admin.site.register(UserMessage, UserMessageAdmin)
admin.site.register(ChatbotResponse, ChatbotResponseAdmin)
