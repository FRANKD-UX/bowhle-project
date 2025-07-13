from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .serializers import DesignCommentSerializer
from django.shortcuts import get_object_or_404
from .serializers import (
    UserRegistrationSerializer,
    UserLoginSerializer,
    UserProfileSerializer,
    PasswordChangeSerializer,  # Changed from ChangePasswordSerializer
    DesignProjectSerializer,
    DesignProgressSerializer,
    DesignCommentSerializer
)
from .models import DesignProject, DesignProgress, DesignFile, ProjectComment

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    """User registration with automatic token generation"""
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response({
            'user': UserProfileSerializer(user).data,
            'access': str(refresh.access_token),
            'refresh': str(refresh)
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    """User login with JWT token generation"""
    serializer = UserLoginSerializer(data=request.data)
    if serializer.is_valid():
        user = authenticate(
            username=serializer.validated_data['username'],
            password=serializer.validated_data['password']
        )
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh)
            }, status=status.HTTP_200_OK)
    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    """Get or update user profile"""
    if request.method == 'GET':
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data)
    
    serializer = UserProfileSerializer(request.user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    """Change user password"""
    serializer = PasswordChangeSerializer(data=request.data, context={'user': request.user})
    if serializer.is_valid():
        request.user.set_password(serializer.validated_data['new_password'])
        request.user.save()
        return Response({'message': 'Password updated successfully'})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def design_projects(request):
    """List or create design projects"""
    if request.method == 'GET':
        projects = DesignProject.objects.filter(client=request.user)
        serializer = DesignProjectSerializer(projects, many=True)
        return Response(serializer.data)
    
    serializer = DesignProjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(client=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def design_project_detail(request, pk):
    """Retrieve, update or delete a design project"""
    project = get_object_or_404(DesignProject, pk=pk, client=request.user)
    
    if request.method == 'GET':
        serializer = DesignProjectSerializer(project)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = DesignProjectSerializer(project, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def progress_list(request, project_id):
    """Get or add progress updates"""
    project = get_object_or_404(DesignProject, pk=project_id, client=request.user)
    
    if request.method == 'GET':
        progress_updates = project.progress_updates.all()
        serializer = DesignProgressSerializer(progress_updates, many=True)
        return Response(serializer.data)
    
    serializer = DesignProgressSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(project=project, updated_by=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def comment_list(request, project_id):
    """Get or add project comments"""
    project = get_object_or_404(DesignProject, pk=project_id, client=request.user)
    
    if request.method == 'GET':
        comments = project.comments.all()
        serializer = DesignCommentSerializer(comments, many=True)
        return Response(serializer.data)
    
    serializer = DesignCommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(project=project, author=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)