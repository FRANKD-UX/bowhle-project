from django.core.management.base import BaseCommand
from django.core.management import call_command

class Command(BaseCommand):
    help = 'Run all test suites for the application'

    def handle(self, *args, **options):
        self.stdout.write("Running unit tests...")
        call_command('test', 'tests')
        
        self.stdout.write("\nRunning integration tests...")
        call_command('test', 'integration_tests')
        
        self.stdout.write("\nTesting complete!")
