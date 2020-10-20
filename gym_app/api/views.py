from rest_framework import viewsets

from .serializers import ModalidadeSerializer
from gym_app.models import Modalidade


class ModalidadeViewSet(viewsets.ModelViewSet):
    queryset = Modalidade.objects.all()
    serializer_class = ModalidadeSerializer