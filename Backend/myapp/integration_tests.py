from django.test import TestCase
from django.core import mail
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from .models import Project, WorkReport

CustomUser = get_user_model()

class EmailNotificationTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        # Create test users
        self.employee = CustomUser.objects.create_user(
            email='frankdafrica@gmail.com',
            password='Mgabadeli',
            role='employee'
        )
        self.client_user = CustomUser.objects.create_user(
            email='client@example.com',
            password='clientpass',
            role='client'
        )
        self.project = Project.objects.create(
            name='Test Project',
            description='Test',
            client_email='client@example.com'
        )
    
    def test_work_report_email_notification(self):
        self.client.force_authenticate(user=self.employee)
        response = self.client.post('/api/work-reports/', {
            'project': self.project.id,
            'hours_worked': 3,
            'work_description': 'Integration test work'
        })
        
        # Test email was sent
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, 'New Work Report Submitted')
        self.assertIn('client@example.com', mail.outbox[0].to)
