from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Note  # Consider renaming to Design, Project, etc.


class UserRegistrationSerializer(serializers.ModelSerializer):
    """
    Serializer for user registration with enhanced validation
    """
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)
    
    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."}
            )
        return attrs

    def create(self, validated_data):
        # Remove password2 from validated_data
        validated_data.pop('password2', None)
        
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', '')
        )
        return user


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for user profile information (read-only or updates)
    """
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'date_joined']
        read_only_fields = ['id', 'username', 'date_joined']


class NoteSerializer(serializers.ModelSerializer):
    """
    Serializer for Note model (consider renaming to DesignSerializer)
    """
    author_name = serializers.CharField(source='author.username', read_only=True)
    author_email = serializers.CharField(source='author.email', read_only=True)
    
    class Meta:
        model = Note
        fields = ['id', 'title', 'content', 'created_at', 'author', 'author_name', 'author_email']
        extra_kwargs = {
            'author': {'read_only': True}
        }

    def validate_title(self, value):
        """
        Custom validation for title field
        """
        if len(value.strip()) < 3:
            raise serializers.ValidationError("Title must be at least 3 characters long.")
        return value.strip()


# Design-specific serializers (suggestions for your design tracking app)
class DesignProjectSerializer(serializers.ModelSerializer):
    """
    Example serializer for design projects
    """
    client_name = serializers.CharField(source='client.username', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    
    class Meta:
        model = Note  # Replace with your actual Design model
        fields = [
            'id', 'title', 'content', 'created_at', 'updated_at',
            'author', 'client_name', 'status', 'status_display',
            'deadline', 'priority'
        ]
        extra_kwargs = {
            'author': {'read_only': True},
            'created_at': {'read_only': True},
            'updated_at': {'read_only': True}
        }


class DesignProgressSerializer(serializers.ModelSerializer):
    """
    Example serializer for tracking design progress
    """
    updated_by_name = serializers.CharField(source='updated_by.username', read_only=True)
    
    class Meta:
        model = Note  # Replace with your actual Progress model
        fields = [
            'id', 'design_project', 'status', 'progress_percentage',
            'notes', 'updated_at', 'updated_by', 'updated_by_name'
        ]
        extra_kwargs = {
            'updated_by': {'read_only': True},
            'updated_at': {'read_only': True}
        }

    def validate_progress_percentage(self, value):
        """
        Ensure progress percentage is between 0 and 100
        """
        if value < 0 or value > 100:
            raise serializers.ValidationError("Progress percentage must be between 0 and 100.")
        return value


# JWT Token serializers
class TokenRefreshSerializer(serializers.Serializer):
    """
    Custom serializer for token refresh
    """
    refresh = serializers.CharField()

    def validate(self, attrs):
        refresh = attrs.get('refresh')
        if not refresh:
            raise serializers.ValidationError("Refresh token is required.")
        return attrs


class PasswordChangeSerializer(serializers.Serializer):
    """
    Serializer for password change
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True, validators=[validate_password])
    new_password2 = serializers.CharField(required=True)

    def validate(self, attrs):
        if attrs['new_password'] != attrs['new_password2']:
            raise serializers.ValidationError(
                {"new_password": "New password fields didn't match."}
            )
        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError("Old password is incorrect.")
        return value

    def save(self, **kwargs):
        user = self.context['request'].user
        user.set_password(self.validated_data['new_password'])
        user.save()
        return user