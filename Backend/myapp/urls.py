from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    # Authentication
    path('auth/register/', views.register_user, name='register'),        
    path('auth/login/', views.login_user, name='login'),                  
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Profile
    path('auth/profile/', views.user_profile, name='profile'),            
    path('auth/change-password/', views.change_password, name='change_password'),

    # Projects
    path('projects/', views.design_projects, name='project-list'),        
    path('projects/<int:pk>/', views.design_project_detail, name='project-detail'),  
    
    # Progress
    path('projects/<int:project_id>/progress/', views.progress_list, name='progress-list'),

    # Comments
    path('projects/<int:project_id>/comments/', views.comment_list, name='comment-list'),

    # Files -  file_list doesn't exist yet
    # path('projects/<int:project_id>/files/', views.file_list, name='file-list'),

    # Dashboard -  dashboard doesn't exist yet
    # path('dashboard/', views.dashboard, name='dashboard'),

    # Health check -  health_check doesn't exist yet
    # path('health/', views.health_check, name='health_check'),
]
