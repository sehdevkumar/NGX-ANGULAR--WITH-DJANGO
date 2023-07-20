import datetime
from django.db import models

# Create your models here.

class Author(models.Model):
    first_name = models.CharField(max_length=50) 
    email = models.EmailField(max_length=100 , null=True, blank=True)
    last_name = models.CharField(max_length=50,null=True, blank=True)   
    about = models.TextField(null=True,blank=True)
    def __str__(self):
        return self.first_name

class Book(models.Model):
    title = models.CharField(max_length=100)
    description =  models.TextField(null=True,blank=True)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, null=True,blank=True)
    
    def __str__(self):
        return self.title
