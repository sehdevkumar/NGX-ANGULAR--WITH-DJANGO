from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework import status, views

from .models import *
from .serializers import *


class AuthorView(views.APIView):
    def post(self,request):
        serializer = AuthorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(data={"message":'created'},status=status.HTTP_201_CREATED)
    def get(self,request):
        authors = Author.objects.all()

        serializer = AuthorSerializer(authors, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK,content_type='application/json')
    
    def delete(self,request):
        authors = Author.objects.get(id=request.GET.get("id"))
        authors.delete()
        return Response(data={'message':'Deleted'},status=status.HTTP_200_OK,content_type='application/json')
    
        
    


class BookView(views.APIView):
    def get(self,request):
        book = Book.objects.all()
        serializer = BookSerializer(book, many=True)
        return Response(data=list(serializer.data),status=status.HTTP_200_OK)
    
    def post(self, request):
        print(request.data)
        try:
            findAuthor = Author.objects.get(id=request.data["id"])
        except Author.DoesNotExist:
            return Response(data={"message": "Author not found"}, status=status.HTTP_404_NOT_FOUND)
        
        request.data["author"]=findAuthor.id
        serializer = BookSerializer(data=request.data)
      
        if serializer.is_valid():
            serializer.save()
            return Response(data={"message": "Created"}, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
