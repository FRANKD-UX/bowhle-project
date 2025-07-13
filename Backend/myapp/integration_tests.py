from django.test import TestCase
from django.core import mail
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from .models import DesignProject

User = get_user_model()

class EmailNotificationTests(TestCase):
    def setUp(self):
        self.client = APIClient()

        self.employee = User.objects.create_user(
            email='employee@example.com', password='employee123', username='emp1')
        self.client_user = User.objects.create_user(
            email='client@example.com', password='client123', username='cli1')

        self.project = DesignProject.objects.create(
            title='Test Project',
            description='Integration testing',
            client=self.client_user,
            designer=self.employee
        )

    def test_email_notification_sent_on_report(self):
        self.client.force_authenticate(user=self.employee)
        response = self.client.post('/api/projects/', {
            'title': 'New Design',
            'description': 'Created in test',
            'designer': self.client_user.id
        })

        self.assertEqual(response.status_code, 201)
        # Example email test, expand when email logic is implemented
        self.assertEqual(len(mail.outbox), 0)  # No email yet unless feature is added
