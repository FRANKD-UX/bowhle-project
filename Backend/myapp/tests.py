from django.test import TestCase
from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework import status
from .models import Project, WorkReport, UserActivity
import json

CustomUser = get_user_model()

class AuthTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user_data = {
            'email': 'test@example.com',
            'password': 'testpass123',
            'role': 'client'
        }
        self.user = CustomUser.objects.create_user(**self.user_data)
    
    def test_user_registration(self):
        data = {
            'email': 'new@example.com',
            'password': 'newpass123',
            'role': 'client'
        }
        response = self.client.post('/api/auth/register/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    
    def test_user_login(self):
        response = self.client.post('/api/auth/login/', {
            'email': self.user_data['email'],
            'password': self.user_data['password']
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

class ProjectTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.admin = CustomUser.objects.create_superuser(
            email='admin@example.com',
            password='adminpass',
            role='employee'
        )
        self.client.force_authenticate(user=self.admin)
        self.project_data = {
            'name': 'Test Project',
            'description': 'Test Description',
            'client_email': 'client@example.com'
        }
    
    def test_create_project(self):
        response = self.client.post('/api/projects/', self.project_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Project.objects.count(), 1)

class WorkReportTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.employee = CustomUser.objects.create_user(
            email='employee@example.com',
            password='emppass123',
            role='employee'
        )
        self.client.force_authenticate(user=self.employee)
        self.project = Project.objects.create(
            name='Test Project',
            description='Test Desc',
            client_email='client@example.com'
        )
    
    def test_create_work_report(self):
        data = {
            'project': self.project.id,
            'hours_worked': 5,
            'work_description': 'Did some work'
        }
        response = self.client.post('/api/work-reports/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(WorkReport.objects.count(), 1)
