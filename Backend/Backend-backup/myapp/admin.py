from django.contrib import admin
from .models import DesignProject, DesignProgress, DesignFile, ProjectComment

@admin.register(DesignProject)
class DesignProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'client', 'status', 'deadline')
    list_filter = ('status', 'priority')
    search_fields = ('title', 'client__username')

