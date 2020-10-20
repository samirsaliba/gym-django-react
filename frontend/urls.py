from django.urls import path

from .views import index, ModalidadeDetailView

urlpatterns = [
    path('', index),
    path('edit/<int:pk>', ModalidadeDetailView.as_view()),
    path('delete/<int:pk>', ModalidadeDetailView.as_view()),
]