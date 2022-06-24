from django.urls import path
from . import views

urlspatterns = [
    path('comments/', views.comments_list),
]