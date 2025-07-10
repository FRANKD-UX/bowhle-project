from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    # Basic views
    path('', views.home, name='home'),
    path('health/', views.health_check, name='health_check'),
    
    # Authentication
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Profile management
    path('profile/', views.profile, name='profile'),
    path('profile/update/', views.update_profile, name='update_profile'),
    path('profile/change-password/', views.change_password, name='change_password'),
    
    # Notes/Design operations
    path('notes/', views.notes, name='notes'),
    path('notes/<int:pk>/', views.note_detail, name='note_detail'),
    
    # Dashboard
    path('dashboard/', views.dashboard, name='dashboard'),
]