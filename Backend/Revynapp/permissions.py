# Revynapp/permissions.py

from rest_framework import permissions

class IsAdminUser(permissions.BasePermission):
    """
    Custom permission to only allow admin users to access certain views.
    """

    def has_permission(self, request, view):
        # Check if the user is authenticated and is staff
        return request.user.is_authenticated and request.user.is_staff
