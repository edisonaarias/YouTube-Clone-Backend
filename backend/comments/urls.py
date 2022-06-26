from django.urls import path
from . import views

urlpatterns = [
    path('', views.comments_list),
    path('<int:pk>/', views.Comment_detail),
]