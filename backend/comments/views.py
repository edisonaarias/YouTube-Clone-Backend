import comments
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from .serializers import CommentSerializer
from .models import Comment
from comments import serializers

@api_view(['GET','POST'])
def comments_list(request):
    if request.method == 'GET':
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response (serializer.data, status=status.HTTP_201_CREATED)
  
@api_view(['GET'])
def Comment_detail(request, pk):
        comment = get_object_or_404(Comment, pk=pk)
        serializers = CommentSerializer(comment);
        return Response(serializers.data)
