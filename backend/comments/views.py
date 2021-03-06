from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from .serializers import CommentSerializer
from .models import Comment
from comments import serializers
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status

@api_view(['GET','POST'])
@permission_classes([AllowAny])
def comments_list(request):
    if request.method == 'GET':
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response (serializer.data, status=status.HTTP_201_CREATED)
  
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def Comment_detail(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    if request.method == 'GET':
        serializers = CommentSerializer(comment)
        return Response(serializers.data)
    elif request.method == 'PUT':
        serializers = CommentSerializer(comment, data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data)
    elif request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
