from django.db import models
from authentication.models import User

# Create your models here.
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=50)
    text = models.CharField(max_length=255)
    like = models.IntegerField(max_length=255)
    dislikes = models.IntegerField(max_length=255)