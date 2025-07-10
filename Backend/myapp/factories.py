import factory
from django.contrib.auth import get_user_model
from .models import Project, WorkReport

CustomUser = get_user_model()

class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = CustomUser
    
    email = factory.Sequence(lambda n: f'user{n}@example.com')
    password = factory.PostGenerationMethodCall('set_password', 'testpass123')
    role = 'client'

class ProjectFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Project
    
    name = factory.Sequence(lambda n: f'Project {n}')
    description = factory.Faker('sentence')
    client_email = factory.Faker('email')

class WorkReportFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = WorkReport
    
    project = factory.SubFactory(ProjectFactory)
    employee = factory.SubFactory(UserFactory, role='employee')
    hours_worked = factory.Faker('random_int', min=1, max=8)
    work_description = factory.Faker('paragraph')
