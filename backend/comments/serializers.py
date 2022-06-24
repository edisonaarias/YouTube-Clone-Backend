from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModSerializer):
    class Meta:
        model = Comment
        fields = ['user','video_id','text','text','like','dislike']
