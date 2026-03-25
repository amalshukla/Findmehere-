from rest_framework import generics, status
from rest_framework.response import Response
from .models import Contact, Feedback, Project
from .serializers import *
from rest_framework import generics
from .models import Feedback
from .serializers import FeedbackSerializer
from django.core.mail import send_mail

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


'''class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        if not request.data.get("email"):
            return Response({"error": "Email is required"}, status=400)
        return super().create(request, *args, **kwargs)'''



class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        contact = serializer.save()

        send_mail(
            subject=f"New Contact from {contact.name}",
            message=contact.message,
            from_email=contact.email,
            recipient_list=['amalshukla562000@gmail.com'],
        )



class FeedbackCreateView(generics.CreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

class FeedbackListView(generics.ListAPIView):
    queryset = Feedback.objects.order_by('-created_at')[:6]
    serializer_class = FeedbackSerializer