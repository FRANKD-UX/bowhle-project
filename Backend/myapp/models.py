from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class DesignProject(models.Model):
    """
    Main model for design projects
    """
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('in_progress', 'In Progress'),
        ('review', 'Under Review'),
        ('revision', 'Needs Revision'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]
    
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
        ('urgent', 'Urgent'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    client = models.ForeignKey(User, on_delete=models.CASCADE, related_name='client_projects')
    designer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='designer_projects')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='medium')
    
    # Dates
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deadline = models.DateTimeField(null=True, blank=True)
    completed_at = models.DateTimeField(null=True, blank=True)
    
    # Design details
    design_type = models.CharField(max_length=100, blank=True)  # Logo, Website, Brochure, etc.
    budget = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    
    def __str__(self):
        return f"{self.title} - {self.client.username}"
    
    class Meta:
        ordering = ['-created_at']


class DesignProgress(models.Model):
    """
    Model to track progress updates on design projects
    """
    project = models.ForeignKey(DesignProject, on_delete=models.CASCADE, related_name='progress_updates')
    status = models.CharField(max_length=20, choices=DesignProject.STATUS_CHOICES)
    progress_percentage = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        default=0
    )
    notes = models.TextField()
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.project.title} - {self.progress_percentage}%"
    
    class Meta:
        ordering = ['-updated_at']


class DesignFile(models.Model):
    """
    Model to store design files and attachments
    """
    FILE_TYPES = [
        ('initial', 'Initial Design'),
        ('revision', 'Revision'),
        ('final', 'Final Design'),
        ('reference', 'Reference Material'),
        ('other', 'Other'),
    ]
    
    project = models.ForeignKey(DesignProject, on_delete=models.CASCADE, related_name='files')
    file = models.FileField(upload_to='design_files/')
    file_type = models.CharField(max_length=20, choices=FILE_TYPES, default='other')
    description = models.CharField(max_length=200, blank=True)
    uploaded_by = models.ForeignKey(User, on_delete=models.CASCADE)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.project.title} - {self.file.name}"
    
    class Meta:
        ordering = ['-uploaded_at']


class ProjectComment(models.Model):
    """
    Model for comments/feedback on design projects
    """
    project = models.ForeignKey(DesignProject, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_internal = models.BooleanField(default=False)  # Internal notes vs client feedback
    
    def __str__(self):
        return f"Comment on {self.project.title} by {self.author.username}"
    
    class Meta:
        ordering = ['-created_at']


# Keep the Note model if you want to maintain your current serializer
class Note(models.Model):
    """
    Basic Note model (for backwards compatibility)
    """
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-created_at']
