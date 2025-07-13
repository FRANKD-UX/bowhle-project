import factory
from django.contrib.auth import get_user_model
from .models import DesignProject, DesignProgress

User = get_user_model()

class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User

    email = factory.Sequence(lambda n: f'user{n}@example.com')
    password = factory.PostGenerationMethodCall('set_password', 'testpass123')
    username = factory.Sequence(lambda n: f'user{n}')


class DesignProjectFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = DesignProject

    title = factory.Faker('sentence')
    description = factory.Faker('paragraph')
    client = factory.SubFactory(UserFactory)
    designer = factory.SubFactory(UserFactory)
    status = 'pending'
    priority = 'medium'