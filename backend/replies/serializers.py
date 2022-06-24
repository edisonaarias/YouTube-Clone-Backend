class rest_framework import serializers
from .models import Reply

class Reply(serializers.ModelSerializer):
    class Meta:
        Model = Reply
        fields = ['user','comment','text']
