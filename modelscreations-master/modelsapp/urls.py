from django.urls import path

from modelsapp.views import AuthorView, BookView

urlpatterns = [
    path('authors/', AuthorView.as_view()),
    path('books/', BookView.as_view()),
]
