from django.urls import path
from .views import *

urlpatterns = [
    path('projects/', ProjectListView.as_view()),
    path('contact/', ContactCreateView.as_view()),
    path('feedback/', FeedbackCreateView.as_view()),
    path('feedback-list/', FeedbackListView.as_view()),
]